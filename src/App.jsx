import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import Navbar from "./components/Navigation/navbar-temp.jsx";
import PromptBox from "./components/PromptBox/PromptBox";
import ConsultationPopup from "./components/ConsultationPopup";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import KundliAnalysis from "./pages/KundliAnalysis";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import PaymentFailure from "./pages/PaymentFailure.jsx";
import ThankYou from "./pages/ThankYou";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

// Meta Pixel
import { trackPageView } from "./utils/metaPixel";

const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // 🔥 META PIXEL PAGE VIEW TRACKING (IMPORTANT)
  useEffect(() => {
    trackPageView();
  }, [location.pathname]);

  // 🔍 BACKEND CONNECTION TEST (optional)
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/test")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ BACKEND CONNECTED:", data);
      })
      .catch((err) => {
        console.error("❌ BACKEND CONNECTION ERROR:", err);
      });
  }, []);

  return (
    <>
      {/* Hide on admin routes */}
      {!isAdminRoute && <ConsultationPopup />}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kundli-analysis" element={<KundliAnalysis />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Payment */}
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />

        {/* Admin */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isAdminRoute && <PromptBox />}
    </>
  );
};

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Layout />
    </BrowserRouter>
  );
}

export default App;
