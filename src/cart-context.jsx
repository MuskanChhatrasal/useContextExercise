import { createContext, useContext, useState } from "react";

const CartContext = createContext({ items: 4, logger: () => {} });

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(3);
  function addToCart() {
    setItems((items) => items + 1);
  }
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartContext, CartProvider, useCart };
