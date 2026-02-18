import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="grid md:grid-cols-4 gap-6 max-w-5xl w-full">

        {/* Kundli */}
        <div
          onClick={() => navigate("/admin/kundli")}
          className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-2">
            Kundli Consultations
          </h2>
          <p className="text-gray-600">
            View paid Kundli consultations.
          </p>
        </div>

        {/* Bracelet */}
        <div
          onClick={() => navigate("/admin/bracelet-orders")}
          className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-[#BC6C25] mb-2">
            Bracelet Orders
          </h2>
          <p className="text-gray-600">
            Manage bracelet purchases.
          </p>
        </div>

        {/* Rudraksha */}
        <div
          onClick={() => navigate("/admin/rudraksha-orders")}
          className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Rudraksha Orders
          </h2>
          <p className="text-gray-600">
            Manage rudraksha purchases.
          </p>
        </div>

{/* Potli */}
<div
  onClick={() => navigate("/admin/potli-orders")}
  className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
>
  <h2 className="text-2xl font-semibold text-[#5D101D] mb-2">
    Potli Orders
  </h2>
  <p className="text-gray-600">
    Manage potli purchases.
  </p>
</div>

      </div>
    </div>
  );
};

export default AdminHome;
