
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

    try {
      setLoading(true);

      // 1️⃣ Create Razorpay order
      const orderRes = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        { amount: 299 }
      );

      const { order } = orderRes.data;

      // 2️⃣ Razorpay options
      const options = {
        key: "rzp_test_S11LzPLxkWukNp",
        amount: order.amount,
        currency: "INR",
        name: "Astro Vaastu Savvy",
        description: "Kundli Analysis Consultation",
        order_id: order.id,

        handler: async function (response) {
          const verifyRes = await axios.post(
            "http://localhost:5000/api/payment/verify",
            response
          );

          if (verifyRes.data.success) {
            await axios.post("http://localhost:5000/api/kundli/paid", {
              ...formData,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
            });

           navigate("/thank-you");

            setFormData({
              fullName: "",
              email: "",
              phone: "",
              dateOfBirth: "",
              timeOfBirth: "",
              placeOfBirth: "",
              gender: "",
              message: "",
            });
          }

          setLoading(false);
        },

        theme: {
          color: "#6A1B9A",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
  <div className="min-h-screen bg-[#F5EBE0] flex items-center justify-center px-6 py-16">
    <div className="max-w-6xl w-full bg-[#FDF8F3] rounded-3xl shadow-xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden border border-[#606C33]/30">

      {/* LEFT — FORM */}
      <div className="p-8 lg:p-12">
        <h2 className="text-3xl font-['Playfair_Display'] text-[#1B2624] mb-2">
          Kundli Analysis Consultation
        </h2>

        <div className="h-px w-20 bg-[#606C33]/60 mb-6"></div>

        <p className="font-['Poppins'] text-[#1B2624]/80 mb-8">
          Submit your birth details for a <strong>manual & personalised</strong>{" "}
          Kundli analysis conducted ethically by Acharaya Dr. Savvy Singh.
        </p>

        <form onSubmit={handlePayAndSubmit} className="space-y-5">

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white
                       focus:outline-none focus:ring-2 focus:ring-[#BC6C25]/40"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white
                         focus:outline-none focus:ring-2 focus:ring-[#BC6C25]/40"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white
                         focus:outline-none focus:ring-2 focus:ring-[#BC6C25]/40"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
              required
            />
            <input
              type="time"
              name="timeOfBirth"
              value={formData.timeOfBirth}
              onChange={handleChange}
              className="px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
              required
            />
          </div>

          <input
            type="text"
            name="placeOfBirth"
            placeholder="Place of Birth"
            value={formData.placeOfBirth}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#606C33]/40 rounded-xl bg-white"
            required
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
            className={`w-full py-3 rounded-full font-['Poppins'] text-lg transition
              flex items-center justify-center shadow-md ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#BC6C25] text-white hover:opacity-90"
              }`}
          >
            {loading ? <Loader /> : "Pay ₹299 & Submit Details"}
          </button>
        </form>
      </div>

     {/* RIGHT — INFO */}
<div className="bg-[#606C33]/15 p-10 lg:p-12 flex flex-col justify-between border-l border-[#606C33]/30">

 

  {/* IMAGE */}
  <div className="mt-2">
    <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#606C33]/30">

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[#1B2624]/10"></div>

      <img
        src="/images/kundli-illustration.jpeg"
        alt="Kundli Birth Chart Illustration"
        className="w-full h-150 object-cover"
      />
    </div>
  </div>

 <div>
    <h3 className="text-2xl font-['Playfair_Display'] text-[#1B2624] mb-4">
      Why Kundli Analysis?
    </h3>

    <div className="h-px w-16 bg-[#606C33]/60 mb-6"></div>

    <p className="font-['Poppins'] text-[#1B2624]/80 mb-6 leading-relaxed">
      Your Kundli is a detailed map of planetary positions at the time of birth.
      When interpreted correctly, it offers clarity on career, relationships,
      finances, health, and spiritual growth.
    </p>

    <ul className="space-y-3 font-['Poppins'] text-sm text-[#1B2624]/85 mb-8">
      <li>• No automated or fear-based reports</li>
      <li>• Ethical & practical guidance</li>
      <li>• Personal follow-up after analysis</li>
    </ul>

    <p className="text-xs font-['Poppins'] text-[#606C33]">
      Confidential • Paid Consultation • Manual Interpretation
    </p>
  </div>
</div>


    </div>
  </div>
);
};


export default KundliAnalysis;
