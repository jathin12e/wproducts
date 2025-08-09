// src/cartcontext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to persist cartItems:", e);
    }
  }, [cartItems]);

  /**
   * addToCart(item)
   * item: { id, name, price, qty, img, category, ... }
   * - merges qty when id already exists
   */
  const addToCart = (item) => {
    if (!item || !item.id) {
      console.warn("addToCart called without an id. Item ignored.", item);
      return;
    }

    setCartItems((prevItems) => {
      const idx = prevItems.findIndex((i) => i.id === item.id);
      if (idx >= 0) {
        const next = [...prevItems];
        next[idx] = {
          ...next[idx],
          qty: (Number(next[idx].qty) || 0) + (Number(item.qty) || 1),
        };
        return next;
      }
      return [...prevItems, { ...item, qty: Number(item.qty) || 1 }];
    });
  };

  /**
   * removeFromCart(id)
   * removes by id (string)
   */
  const removeFromCart = (id) => {
    if (!id) return;
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
