"use client";

import React, { createContext, useState, ReactNode, useContext } from "react";

// Define the type for product items
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity?: number; // Optional, used in cart
}

// Define the structure of your context
interface AppContextType {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product, quantity: number) => void;
  addToWishlist: (product: Product) => void;
  removeFromCart: (id: string) => void;
  removeFromWishlist: (id: string) => void;
  clearCart: () => void;
}

// Create context with undefined as the default value
export const AppContext = createContext<AppContextType | undefined>(undefined);

// Custom hook to use the AppContext
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity }]);
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
