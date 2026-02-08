import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/axios";

function ProductPayment() {
  const { cartItem, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const checkoutData = JSON.parse(
    localStorage.getItem("productCheckoutData")
  );

  // 🔒 Guard: if cart missing, redirect
  useEffect(() => {
    if (!cartItem) {
      navigate("/shop");
    }
  }, [cartItem, navigate]);

  const handlePayment = async () => {
    if (!cartItem) return;

    try {
      setLoading(true);

      // 1️⃣ Create Razorpay order
      const { data } = await api.post(
        "/api/product-payment/create-order",
        { amount: cartItem.price }
      );

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: "INR",
        name: "Astro Vaastu Savvy",
        description: "Bracelet Purchase",
        order_id: data.order.id,

        handler: async function (response) {
          const verifyRes = await api.post(
            "/api/product-payment/verify",
            {
              ...response,
              productName: cartItem.name,
              productPrice: cartItem.price,
              customerName: checkoutData?.name,
              phone: checkoutData?.phone,
              email: checkoutData?.email,
              address: checkoutData?.address,
            }
          );

          if (verifyRes.data.success) {
            removeFromCart();
            localStorage.removeItem("productCheckoutData");
            navigate("/payment-success");
          } else {
            navigate("/payment-failure");
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },

        theme: {
          color: "#BC6C25",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (err) {
      console.error("Payment init error:", err);
      setLoading(false);
      navigate("/payment-failure");
    }
  };

  if (!cartItem) return null;

  const originalPrice = Math.round(cartItem.price / 0.4);

  return (
    <div className="min-h-screen bg-[#f9f7f3] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <h1 className="text-3xl font-['Playfair_Display'] text-center text-[#1B2624]">
          Confirm Your Order
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Please review before proceeding to payment
        </p>

        {/* Product Card */}
        <div className="mt-8 flex gap-5 items-center border rounded-xl p-4">

          <img
  src="/images/shop/panch-mukhi-rudradsha-2.jpeg"
  alt="Panch Mukhi Rudraksha Bracelet"
  className="w-32 h-32 object-cover rounded-xl"
/>

          <div className="flex-1">
            <h2 className="text-lg font-semibold text-[#1B2624]">
              {cartItem.name}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Quantity: 1
            </p>

            <div className="mt-2">
              <p className="text-sm text-gray-400 line-through">
                MRP ₹{originalPrice}
              </p>
              <p className="text-lg font-bold text-[#BC6C25]">
                ₹{cartItem.price}
              </p>
              <p className="text-xs text-green-600">
                You save 60% today
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="mt-6 text-sm text-gray-600">
          <p>
            <span className="font-medium">Delivering to:</span>{" "}
            {checkoutData?.name}, {checkoutData?.city}
          </p>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mt-6 text-lg font-semibold">
          <span>Total Payable</span>
          <span>₹{cartItem.price}</span>
        </div>

        {/* CTA */}
        <button
          onClick={handlePayment}
          disabled={loading}
          className={`w-full mt-8 py-4 rounded-xl font-semibold text-lg transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#BC6C25] hover:bg-[#a85d1f] text-white"
          }`}
        >
          {loading ? "Opening Payment..." : "Confirm & Pay Securely"}
        </button>

        {/* Trust Text */}
        <p className="text-center text-sm text-gray-500 mt-4">
          🔒 100% Secure payment powered by Razorpay
        </p>

      </div>
    </div>
  );
}

export default ProductPayment;
