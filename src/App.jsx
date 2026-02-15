// ==============================
// REACT ROUTER IMPORTS
// ==============================
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// ==============================
// COMMON COMPONENTS
// ==============================
import Navbar from "./components/Navigation/navbar-temp.jsx";
import PromptBox from "./components/PromptBox/PromptBox";
import ConsultationPopup from "./components/ConsultationPopup";
import ProtectedRoute from "./components/ProtectedRoute";

// ==============================
// PUBLIC PAGES
// ==============================
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Blogs from "./pages/Blogs.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import KundliAnalysis from "./pages/KundliAnalysis";
import ThankYou from "./pages/ThankYou";
import Mahashivratri from "./pages/Mahashivratri";

// ==============================
// SHOP / PRODUCT PAGES
// ==============================
import BraceletDetails from "./pages/BraceletDetails..jsx";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductPayment from "./pages/ProductPayment";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import PaymentFailure from "./pages/PaymentFailure.jsx";
import ProductDetails from "./pages/ProductDetails";
import RudrakshaCategory from "./pages/RudrakshaCategory";
import RudrakshaDetails from "./pages/RudrakshaDeatils.jsx";
import KundliOrders from "./pages/admin/KundliOrders.jsx";
import RudrakshaOrders from "./pages/admin/RudrakshaOrders.jsx";
import BraceletOrders from "./pages/admin/BraceletOrders.jsx";

// ==============================
// ADMIN PAGES
// ==============================
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/admin/AdminHome";
import AdminKundli from "./pages/admin/KundliOrders.jsx";
import AdminOrders from "./pages/admin/AdminOrders";
import Bracelets from "./pages/Bracelets";
import Rudraksha from "./pages/Rudraksha";

// ==============================
// META PIXEL TRACKING
// ==============================
import { trackPageView } from "./utils/metaPixel";

/* =====================================================
   LAYOUT COMPONENT
   - Handles Navbar visibility
   - Handles Meta Pixel tracking
   - Contains ALL routes
===================================================== */
const Layout = () => {
  const location = useLocation();

  // Check if current route is admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Track page views for Meta Pixel on every route change
  useEffect(() => {
    trackPageView();
  }, [location.pathname]);

  // Optional backend connection test (safe to keep)
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/api/test")
      .then((res) => res.json())
      .then((data) => console.log("✅ BACKEND CONNECTED:", data))
      .catch((err) => console.error("❌ BACKEND ERROR:", err));
  }, []);

  return (
    <>
      {/* 
        Hide Navbar & Consultation Popup 
        on all admin routes 
      */}
      {!isAdminRoute && <ConsultationPopup />}
      {!isAdminRoute && <Navbar />}

      {/* ======================
          ALL APPLICATION ROUTES
         ====================== */}
      <Routes>
        {/* ===== PUBLIC ROUTES ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
<Route path="/shop" element={<Shop />} />
        {/* BLOG ROUTES */}
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/blogs/maha-shivratri"
          element={<Mahashivratri />}
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/kundli-analysis" element={<KundliAnalysis />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* ===== SHOP / PRODUCT ROUTES ===== */}
        <Route path="/bracelet-details" element={<BraceletDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-payment" element={<ProductPayment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
<Route path="/product/:id" element={<ProductDetails />} />
<Route path="/shop/bracelets" element={<Bracelets />} />
<Route path="/shop/rudraksha" element={<Rudraksha />} />
<Route path="/rudraksha" element={<RudrakshaCategory />} />
<Route path="/bracelet/:id" element={<ProductDetails />} />
<Route path="/rudraksha/:id" element={<RudrakshaDetails />} />
<Route path="/admin/bracelet-orders" element={<BraceletOrders />} />
<Route path="/admin/rudraksha-orders" element={<RudrakshaOrders />} />
<Route path="/admin/kundli-orders" element={<KundliOrders />} />

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

      {/* PromptBox should not appear on admin routes */}
      {!isAdminRoute && <PromptBox />}
    </>
  );
};

/* =====================================================
   APP WRAPPER
   - BrowserRouter must wrap Layout
===================================================== */
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
