import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItem, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (!cartItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f7f3]">
        <p className="text-lg font-['Poppins'] text-gray-600">
          Your cart is empty.
        </p>
      </div>
    );
  }

  const originalPrice = Math.round(cartItem.price / 0.4);

  return (
    <div className="px-6 py-14 min-h-screen bg-[#f9f7f3]">

      {/* Heading */}
      <h1 className="text-4xl text-center font-['Playfair_Display'] text-[#1B2624] mb-12">
        Your Cart
      </h1>

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">

        {/* Offer Badge */}
        <div className="inline-block bg-[#BC6C25] text-white text-sm px-4 py-1 rounded-full mb-4">
          🔥 60% OFF – Limited Offer
        </div>

        {/* Product Image */}
          <img
  src="/images/shop/panch-mukhi-rudradsha-2.jpeg"
  alt="Panch Mukhi Rudraksha Bracelet"
  className="w-32 h-32 object-cover rounded-xl"
/>

        {/* Product Info */}
        <h2 className="text-2xl font-semibold mt-5 text-[#1B2624]">
          {cartItem.name}
        </h2>

        <p className="text-sm text-gray-600 mt-1">
          Sacred bracelet to attract positivity, balance & protection.
        </p>

        {/* Price Section */}
        <div className="mt-4">
          <p className="text-gray-400 line-through">
            MRP ₹{originalPrice}
          </p>

          <p className="text-2xl font-bold text-[#BC6C25]">
            ₹{cartItem.price}
          </p>

          <p className="text-sm text-green-600">
            You save ₹{originalPrice - cartItem.price} (60% OFF)
          </p>
        </div>

        {/* Divider */}
        <hr className="my-6" />

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-[#BC6C25] text-white py-3 rounded-xl font-semibold text-lg hover:bg-[#a85d1f] transition"
          >
            Proceed to Checkout →
          </button>

          <button
            onClick={removeFromCart}
            className="w-full border border-gray-300 py-2 rounded-xl font-['Poppins'] hover:bg-gray-100 transition"
          >
            Remove from Cart
          </button>
        </div>

        {/* Trust Text */}
        <p className="text-center text-sm text-gray-500 mt-5">
          ✔ Secure payment & fast delivery  
          <br />
          ✔ 5–7 working days shipping
        </p>
      </div>
    </div>
  );
}

export default Cart;
