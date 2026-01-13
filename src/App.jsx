import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navigation/navbar-temp.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Courses from "./pages/Courses.jsx";
import Shop from "./pages/Shop.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";
import PaymentFailure from "./pages/PaymentFailure.jsx";
import PromptBox from "./components/PromptBox/PromptBox";
import ConsultationPopup from "./components/ConsultationPopup";
import KundliAnalysis from "./pages/KundliAnalysis";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ThankYou from "./pages/ThankYou";

const Layout = () => {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/admin");

  return (
    <>
      {/* Hide on admin routes */}
      {!isAdminRoute && <ConsultationPopup />}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
   {/*
<Route path="/courses" element={<Courses />} />
<Route path="/shop" element={<Shop />} />
*/}
        <Route path="/kundli-analysis" element={<KundliAnalysis />} />
        <Route path="/thank-you" element={<ThankYou />} />

        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />

        {/* Admin routes */}
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
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
