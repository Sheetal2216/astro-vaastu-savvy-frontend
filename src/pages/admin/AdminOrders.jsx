import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const AdminOrders = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const token = localStorage.getItem("adminToken");

  /* --------------------------------------------------
     🔐 AUTH + FETCH
  -------------------------------------------------- */
  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_API_URL + "/api/orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(res.data.orders || []);
      } catch (err) {
        console.error("Order fetch failed", err);
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate, token]);

  /* --------------------------------------------------
     📊 EXPORT TO EXCEL
  -------------------------------------------------- */
  const exportToExcel = () => {
    if (!filteredOrders.length) return;

    const worksheet = XLSX.utils.json_to_sheet(filteredOrders);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Bracelet Orders");
    XLSX.writeFile(workbook, "bracelet_orders.xlsx");
  };

  /* --------------------------------------------------
     📄 EXPORT TO PDF
  -------------------------------------------------- */
  const exportToPDF = () => {
    if (!filteredOrders.length) return;

    const doc = new jsPDF();
    doc.text("Bracelet Orders - Astro Vaastu Savvy", 14, 15);

    const tableData = filteredOrders.map((o, index) => [
      index + 1,
      o.customerName,
      o.phone,
      o.email || "-",
      o.productName,
      `₹${o.productPrice}`,
      o.orderStatus,
      o.address,
      new Date(o.createdAt).toLocaleDateString(),
    ]);

    doc.autoTable({
      head: [[
        "#",
        "Customer",
        "Phone",
        "Email",
        "Product",
        "Amount",
        "Status",
        "Address",
        "Date",
      ]],
      body: tableData,
      startY: 25,
      styles: { fontSize: 8 },
    });

    doc.save("bracelet_orders.pdf");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading orders...
      </div>
    );
  }

  /* --------------------------------------------------
     🔍 FILTER LOGIC
  -------------------------------------------------- */
  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.customerName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.phone?.includes(searchTerm) ||
      o.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.productName?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesDate = selectedDate
      ? new Date(o.createdAt).toISOString().slice(0, 10) === selectedDate
      : true;

    return matchesSearch && matchesDate;
  });

  /* --------------------------------------------------
     🖥️ UI
  -------------------------------------------------- */
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold text-[#BC6C25]">
          Bracelet Orders
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
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-4 rounded-lg shadow mb-4 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search name / phone / email / product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full md:w-1/2 focus:ring-2 focus:ring-[#BC6C25]"
        />

        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border px-4 py-2 rounded-lg w-full md:w-1/4 focus:ring-2 focus:ring-[#BC6C25]"
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
      {filteredOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full border text-sm">
            <thead className="bg-[#BC6C25] text-white">
              <tr>
                <th className="p-3">Customer</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Product</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
                <th className="p-3">Address</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((o) => (
                <tr key={o._id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{o.customerName}</td>
                  <td className="p-3">{o.phone}</td>
                  <td className="p-3">{o.email || "-"}</td>
                  <td className="p-3">{o.productName}</td>
                  <td className="p-3">₹{o.productPrice}</td>
                  <td className="p-3 capitalize font-medium">
                    {o.orderStatus}
                  </td>
                  <td className="p-3 max-w-xs truncate">
                    {o.address}
                  </td>
                  <td className="p-3">
                    {new Date(o.createdAt).toLocaleDateString()}
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

export default AdminOrders;
