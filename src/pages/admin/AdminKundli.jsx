import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [kundlis, setKundlis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    const fetchKundlis = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_API_URL + "/api/kundli/paid",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setKundlis(res.data.data || []);
      } catch (error) {
        console.error("Admin fetch error:", error);
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
      } finally {
        setLoading(false);
      }
    };

    fetchKundlis();
  }, [navigate, token]);

  // 📊 EXPORT TO EXCEL
  const exportToExcel = () => {
    if (!kundlis.length) return;

    const worksheet = XLSX.utils.json_to_sheet(kundlis);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Paid Kundlis");
    XLSX.writeFile(workbook, "paid_kundlis.xlsx");
  };

  // 📄 EXPORT TO PDF
  const exportToPDF = () => {
    if (!kundlis.length) return;

    const doc = new jsPDF();
    doc.text("Paid Kundli Consultations", 14, 15);

    const tableData = kundlis.map((k, index) => [
      index + 1,
      k.fullName || "-",
      k.email || "-",
      k.phone || "-",
      k.razorpayPaymentId || "-",
      k.dateOfBirth || "-",
      k.timeOfBirth || "-",
      k.placeOfBirth || "-",
      k.gender || "-",
      new Date(k.createdAt).toLocaleDateString(),
    ]);

    doc.autoTable({
      head: [[
        "#",
        "Name",
        "Email",
        "Phone",
        "Payment ID",
        "DOB",
        "Birth Time",
        "Birth Place",
        "Gender",
        "Submitted On",
      ]],
      body: tableData,
      startY: 25,
      styles: { fontSize: 8 },
    });

    doc.save("paid_kundlis.pdf");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading admin data...
      </div>
    );
  }

  // 🔍 FILTER LOGIC
  const filteredKundlis = kundlis.filter((k) => {
    const matchesSearch =
      k.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      k.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      k.phone?.includes(searchTerm);

    const matchesDate = selectedDate
      ? new Date(k.createdAt).toISOString().slice(0, 10) === selectedDate
      : true;

    return matchesSearch && matchesDate;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold text-purple-700">
          Paid Kundli Consultations
        </h1>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={exportToExcel}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Export Excel
          </button>

          <button
            onClick={exportToPDF}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Export PDF
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-4 rounded-lg shadow mb-4 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by name, email or phone"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full md:w-1/2 focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full md:w-1/4 focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={() => {
            setSearchTerm("");
            setSelectedDate("");
          }}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Clear
        </button>
      </div>

      {/* TABLE */}
      {filteredKundlis.length === 0 ? (
        <p>No paid consultations found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full border">
            <thead className="bg-purple-700 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">DOB</th>
                <th className="p-3">Birth Time</th>
                <th className="p-3">Birth Place</th>
                <th className="p-3">Gender</th>
                <th className="p-3">Payment ID</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredKundlis.map((k) => (
                <tr
                  key={k._id}
                  className="border-b hover:bg-gray-50 text-sm"
                >
                  <td className="p-3">{k.fullName}</td>
                  <td className="p-3">{k.email}</td>
                  <td className="p-3">{k.phone}</td>
                  <td className="p-3">{k.dateOfBirth}</td>
                  <td className="p-3">{k.timeOfBirth}</td>
                  <td className="p-3">{k.placeOfBirth}</td>
                  <td className="p-3">{k.gender}</td>
                  <td className="p-3">{k.razorpayPaymentId}</td>
                  <td className="p-3">
                    {new Date(k.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
