import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Checkout() {
  const { cartItem } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });

  if (!cartItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f7f3]">
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      </div>
    );
  }

  const originalPrice = Math.round(cartItem.price / 0.4); // reverse 60% off

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address || !formData.pincode) {
      alert("Please fill all required fields");
      return;
    }

    localStorage.setItem(
      "productCheckoutData",
      JSON.stringify(formData)
    );

    navigate("/product-payment");
  };

  return (
    <div className="min-h-screen bg-[#f9f7f3] px-6 py-14">

      {/* PAGE HEADING */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-['Playfair_Display'] text-[#1B2624]">
          Checkout
        </h1>
        <p className="text-gray-600 mt-2">
          Review your order & complete the purchase
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT — SHOP STYLE PRODUCT CARD */}
        <div className="bg-white rounded-2xl shadow-md p-8">

          {/* OFFER BADGE */}
          <div className="inline-block bg-[#BC6C25] text-white text-sm px-4 py-1 rounded-full mb-5">
            🔥 60% OFF – Limited Time Offer
          </div>

          <div className="flex gap-6 items-start">
         <img
  src="/images/shop/panch-mukhi-rudradsha-2.jpeg"
  alt="Panch Mukhi Rudraksha Bracelet"
  className="w-32 h-32 object-cover rounded-xl"
/>


            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-[#1B2624]">
                {cartItem.name}
              </h2>

              <p className="text-gray-600 mt-2">
                Sacred bracelet designed to attract positivity, protection, and balance.
              </p>

              {/* PRICE SECTION */}
              <div className="mt-4">
                <p className="text-gray-500 line-through">
                  MRP ₹{originalPrice}
                </p>
                <p className="text-2xl font-bold text-[#BC6C25]">
                  ₹{cartItem.price}
                </p>
                <p className="text-sm text-green-600 mt-1">
                  You save ₹{originalPrice - cartItem.price} (60% OFF)
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-lg font-semibold">
            <span>Total Payable</span>
            <span>₹{cartItem.price}</span>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            ✔ Secure payment via Razorpay  
            <br />
            ✔ Delivery within 5–7 working days
          </p>
        </div>

        {/* RIGHT — DELIVERY FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 space-y-6"
        >
          <h2 className="text-2xl font-semibold text-[#1B2624]">
            Delivery Details
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#BC6C25]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number *"
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#BC6C25]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#BC6C25]"
          />

          <textarea
            name="address"
            placeholder="Full Address *"
            rows="3"
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#BC6C25]"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#BC6C25]"
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode *"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg focus:ring-2 focus:ring-[#BC6C25]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#BC6C25] hover:bg-[#a85d1f] text-white py-4 rounded-xl font-semibold text-lg transition"
          >
            Proceed to Secure Payment →
          </button>

          <p className="text-center text-sm text-gray-500">
            🔒 100% Secure & Encrypted Payment
          </p>
        </form>

      </div>
    </div>
  );
}

export default Checkout;
