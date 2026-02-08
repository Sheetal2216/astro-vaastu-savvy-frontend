import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import Navbar from "./components/Navigation/navbar-temp.jsx";
import PromptBox from "./components/PromptBox/PromptBox";
import ConsultationPopup from "./components/ConsultationPopup";
import ProtectedRoute from "./components/ProtectedRoute";

// Public Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import KundliAnalysis from "./pages/KundliAnalysis";
import ThankYou from "./pages/ThankYou";

// Shop / Product
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductPayment from "./pages/ProductPayment";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import PaymentFailure from "./pages/PaymentFailure.jsx";

// Admin
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";
import AdminKundli from "./pages/admin/AdminKundli";
import AdminOrders from "./pages/admin/AdminOrders";

// Meta Pixel
import { trackPageView } from "./utils/metaPixel";

/* =========================
   LAYOUT
========================= */
const Layout = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Meta pixel tracking
  useEffect(() => {
    trackPageView();
  }, [location.pathname]);

  // Optional backend test
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/test")
      .then((res) => res.json())
      .then((data) => console.log("✅ BACKEND CONNECTED:", data))
      .catch((err) => console.error("❌ BACKEND ERROR:", err));
  }, []);

  return (
    <>
      {/* Hide navbar & popup on admin routes */}
      {!isAdminRoute && <ConsultationPopup />}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* ===== PUBLIC ROUTES ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/kundli-analysis" element={<KundliAnalysis />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* ===== SHOP / PRODUCT ===== */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-payment" element={<ProductPayment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />

        {/* ===== ADMIN LOGIN ===== */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ===== PROTECTED ADMIN ROUTES ===== */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/kundli"
          element={
            <ProtectedRoute>
              <AdminKundli />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute>
              <AdminOrders />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!isAdminRoute && <PromptBox />}
    </>
  );
};

/* =========================
   APP WRAPPER
========================= */
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
