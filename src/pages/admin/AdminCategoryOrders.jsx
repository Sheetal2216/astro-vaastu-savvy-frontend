
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminCategoryOrders = ({ category, title, color }) => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin-login");
      return;
    }

    const fetchOrders = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/orders?category=${category}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(res.data.orders || []);
      } catch (err) {
        console.error("Order fetch failed", err);
        navigate("/admin-login");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [category, navigate, token]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className={`text-2xl font-semibold mb-6 ${color}`}>
        {title}
      </h1>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
       <div className="overflow-x-auto bg-white rounded-xl shadow">
  <table className="min-w-full border text-sm">
    <thead className={`${color} text-white`}>
      <tr>
        <th className="p-3">Customer</th>
        <th className="p-3">Phone</th>
        <th className="p-3">Email</th>
        <th className="p-3">Address</th>
        <th className="p-3">Product</th>
        <th className="p-3">Category</th>
        <th className="p-3">Amount</th>
        <th className="p-3">Payment ID</th>
        <th className="p-3">Payment Status</th>
        <th className="p-3">Order Status</th>
        <th className="p-3">Date</th>
      </tr>
    </thead>

    <tbody>
      {orders.map((o) => (
        <tr key={o._id} className="border-b hover:bg-gray-50">
          <td className="p-3">{o.customerName}</td>
          <td className="p-3">{o.phone}</td>
          <td className="p-3">{o.email}</td>
          <td className="p-3 max-w-xs break-words">{o.address}</td>
          <td className="p-3">{o.productName}</td>
          <td className="p-3 capitalize">{o.productCategory}</td>
          <td className="p-3 font-semibold">₹{o.productPrice}</td>
          <td className="p-3 text-xs">{o.paymentId}</td>
          <td className="p-3 capitalize">{o.paymentStatus}</td>
          <td className="p-3 capitalize font-medium">
            {o.orderStatus}
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

export default AdminCategoryOrders;
