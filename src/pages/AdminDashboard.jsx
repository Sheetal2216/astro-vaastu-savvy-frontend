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

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    const fetchKundlis = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/kundli/paid",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setKundlis(res.data.data);
      } catch (error) {
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
    const worksheet = XLSX.utils.json_to_sheet(kundlis);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Paid Kundlis");
    XLSX.writeFile(workbook, "paid_kundlis.xlsx");
  };

  // 📄 EXPORT TO PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Paid Kundli Consultations", 14, 15);

    const tableData = kundlis.map((k, index) => [
      index + 1,
      k.fullName,
      k.email,
      k.phone,
      k.razorpayPaymentId,
      new Date(k.createdAt).toLocaleDateString(),
    ]);

    doc.autoTable({
      head: [["#", "Name", "Email", "Phone", "Payment ID", "Date"]],
      body: tableData,
      startY: 25,
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-purple-700">
          Paid Kundli Consultations
        </h1>

        <div className="flex gap-3">
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

      {kundlis.length === 0 ? (
        <p>No paid consultations found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full border">
            <thead className="bg-purple-700 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Payment ID</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {kundlis.map((k) => (
                <tr key={k._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{k.fullName}</td>
                  <td className="p-3">{k.email}</td>
                  <td className="p-3">{k.phone}</td>
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
