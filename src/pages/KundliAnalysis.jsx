import Loader from "../components/Loader";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const KundliAnalysis = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    gender: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayAndSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);

      // ✅ 1️⃣ CREATE ORDER
      const orderRes = await axios.post(
        import.meta.env.VITE_API_URL + "/api/payment/create-order",
        { amount: 299 }
      );

      const order = orderRes.data.order;
      if (!order?.id) {
        throw new Error("Order creation failed");
      }

      // ✅ 2️⃣ RAZORPAY OPTIONS (UI UNCHANGED)
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY,
        amount: order.amount, // paise
        currency: "INR",
        name: "Astro Vaastu Savvy",
        description: "Kundli Analysis Consultation",
        order_id: order.id,

        handler: async function (response) {
          try {
            // ✅ VERIFY PAYMENT
            const verifyRes = await axios.post(
              import.meta.env.VITE_API_URL + "/api/payment/verify",
              response
            );

            if (!verifyRes.data.success) {
              alert("Payment verification failed");
              setLoading(false);
              return;
            }

            // ✅ SAVE KUNDLI (NON-BLOCKING)
            try {
              await axios.post(
                import.meta.env.VITE_API_URL + "/api/kundli/paid",
                {
                  ...formData,
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                }
              );
            } catch (err) {
              console.warn("Kundli save failed, continuing");
            }

            setLoading(false);
            navigate("/thank-you");
          } catch (err) {
            console.error("Post-payment error:", err);
            alert(
              "Payment successful. If you don’t see confirmation, please contact support."
            );
            setLoading(false);
          }
        },

        // ✅ IMPORTANT: stop loader if user closes Razorpay
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },

        theme: {
          color: "#6A1B9A",
        },
      };

      // ✅ 3️⃣ OPEN RAZORPAY
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EBE0] flex items-center justify-center px-6 py-6">
      <div className="max-w-6xl w-full bg-[#FDF8F3] rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-[#606C33]/30">

        {/* LEFT — FORM */}
        <div className="p-8 lg:p-12">
          <h2 className="text-4xl font-bold font-['Playfair_Display'] text-[#BC6C25] mb-2">
            Book Your Bhagya Kundali
          </h2>

          <div className="h-px w-20 bg-[#606C33]/60 mb-6"></div>

          <p className="font-['Poppins'] text-[#1B2624]/80 mb-8">
            Submit your birth details for Kundali analysis
          </p>

          <form onSubmit={handlePayAndSubmit} className="space-y-5">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
              />
              <input
                type="time"
                name="timeOfBirth"
                value={formData.timeOfBirth}
                onChange={handleChange}
                required
                className="px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
              />
            </div>

            <input
              type="text"
              name="placeOfBirth"
              placeholder="Place of Birth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Specific concerns or questions (optional)"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-full text-lg flex justify-center ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#BC6C25] text-white hover:opacity-90"
              }`}
            >
              {loading ? <Loader /> : "Pay ₹299"}
            </button>
          </form>
        </div>

        {/* RIGHT — INFO (UNCHANGED) */}
        <div className="bg-[#606C33]/15 p-10 lg:p-12 flex flex-col justify-between border-l border-[#606C33]/30">
          <div className="mt-2 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#606C33]/30 w-80">
              <div className="absolute inset-0 bg-[#1B2624]/10 pointer-events-none"></div>
              <img
                src="/images/kundli-illustration.jpeg"
                alt="Kundli Birth Chart Illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold font-['Playfair_Display'] text-[#1B2624] mb-4">
              Why Bhagya Kundali?
            </h3>

            <ul className="space-y-3 text-sm text-[#1B2624]/85">
              <li>• Financial Guidance Analysis</li>
              <li>• Health Analysis</li>
              <li>• Accurate timing of opportunities & challenges</li>
              <li>• Remedies focused on balance, not fear</li>
              <li>• Personally analysed by Acharya Dr. Savvy Singh</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default KundliAnalysis;
