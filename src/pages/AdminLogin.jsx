import { useState, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";



const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

useEffect(() => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    navigate("/admin");
  }
}, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        { email, password }
      );

      // Save token
      localStorage.setItem("adminToken", res.data.token);

      navigate("/admin");
    } catch (error) {
      alert("Invalid admin credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-purple-700">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-3 border rounded-lg"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
