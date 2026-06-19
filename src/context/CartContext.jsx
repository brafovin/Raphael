"use client";

import { createContext, useContext, useReducer, useEffect, useState } from "react";

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const key = `${action.product.id}-${action.size}`;
      const existing = state.find((i) => i.key === key);
      if (existing) {
        return state.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + action.quantity } : i
        );
      }
      return [
        ...state,
        {
          key,
          product: action.product,
          size: action.size,
          quantity: action.quantity,
        },
      ];
    }
    case "REMOVE_ITEM":
      return state.filter((i) => i.key !== action.key);
    case "UPDATE_QUANTITY":
      return state
        .map((i) =>
          i.key === action.key
            ? { ...i, quantity: Math.max(0, i.quantity + action.delta) }
            : i
        )
        .filter((i) => i.quantity > 0);
    case "CLEAR_CART":
      return [];
    case "LOAD":
      return action.items;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, []);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("raphael-cart");
      if (stored) {
        dispatch({ type: "LOAD", items: JSON.parse(stored) });
      }
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("raphael-cart", JSON.stringify(items));
    }
  }, [items, hydrated]);

  const addToCart = (product, size, quantity = 1) =>
    dispatch({ type: "ADD_ITEM", product, size, quantity });

  const removeFromCart = (key) => dispatch({ type: "REMOVE_ITEM", key });

  const updateQuantity = (key, delta) =>
    dispatch({ type: "UPDATE_QUANTITY", key, delta });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal, hydrated }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart muss innerhalb von CartProvider verwendet werden");
  return ctx;
}
