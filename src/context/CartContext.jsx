import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(null);

useEffect(() => {
  if (cartItem) {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  } else {
    localStorage.removeItem("cartItem");
  }
}, [cartItem]);


  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItem");
    if (savedCart) {
      setCartItem(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (cartItem) {
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }
  }, [cartItem]);

  const addToCart = (item) => {
    setCartItem(item);
  };

  const removeFromCart = () => {
    setCartItem(null);
    localStorage.removeItem("cartItem");
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
