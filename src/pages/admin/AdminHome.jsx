import { useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  
  // 2. Get the role from localStorage
  const role = localStorage.getItem("adminRole");

  // 1. Logout Logic
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminRole");
    navigate("/admin-login");
  };
console.log("Admin Role:", role);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 relative">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg absolute top-6 right-6 transition duration-200 shadow-md"
      >
        Logout
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl w-full">
        
        {/* --- SUPER ADMIN ONLY SECTIONS --- */}
        {role === "super-admin" && (
          <>
            {/* Kundli */}
            <div
              onClick={() => navigate("/admin/kundli")}
              className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-purple-700 mb-2">
                Kundli Consultations
              </h2>
              <p className="text-gray-600">View paid Kundli consultations.</p>
            </div>

            {/* Bracelet */}
            <div
              onClick={() => navigate("/admin/bracelet-orders")}
              className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-[#BC6C25] mb-2">
                Bracelet Orders
              </h2>
              <p className="text-gray-600">Manage bracelet purchases.</p>
            </div>

            {/* Rudraksha */}
            <div
              onClick={() => navigate("/admin/rudraksha-orders")}
              className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-green-700 mb-2">
                Rudraksha Orders
              </h2>
              <p className="text-gray-600">Manage rudraksha purchases.</p>
            </div>

            {/* Potli */}
            <div
              onClick={() => navigate("/admin/potli-orders")}
              className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-[#5D101D] mb-2">
                Potli Orders
              </h2>
              <p className="text-gray-600">Manage potli purchases.</p>
            </div>
          </>
        )}

        {/* --- SHARED SECTIONS (Super Admin OR Blog Admin) --- */}
        {(role === "super-admin" || role === "blog-admin") && (
          <div
            onClick={() => navigate("/admin/blogs")}
            className="cursor-pointer bg-white p-8 rounded-xl shadow hover:shadow-lg transition border border-[#606C33]/30"
          >
            <h2 className="text-2xl font-semibold text-[#606C33] mb-2">
              Blog Management
            </h2>
            <p className="text-gray-600">
              Create, edit and manage website blogs.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminHome;