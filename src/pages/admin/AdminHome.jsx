import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">

        {/* Kundli Section */}
        <div
          onClick={() => navigate("/admin/kundli")}
          className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">
            Kundli Management
          </h2>
          <p className="text-gray-600">
            View paid Kundli consultations, export data, and manage clients.
          </p>
        </div>

        {/* Orders Section */}
        <div
          onClick={() => navigate("/admin/orders")}
          className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-[#BC6C25] mb-2">
            Bracelet Orders
          </h2>
          <p className="text-gray-600">
            View bracelet purchases, customer details, and shipping info.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AdminHome;
