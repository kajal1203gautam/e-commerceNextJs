'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

// Define types for the item and the cart context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

useEffect(() => {
  if(localStorage && localStorage.getItem("cart")){
    setCart(JSON.parse(localStorage.getItem("cart")))
  }
},[])

  const addToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem('cart', JSON.stringify([...cart, item]));
  };

  const removeFromCart = (id) => {
    const remainingData = cart.filter((item) => item?.id !== id)
    setCart([...remainingData]);
    localStorage.setItem('cart', JSON.stringify([...remainingData]));
  };
  const totalAmount = () =>{
    let total = 0;
    cart.forEach((item) => {
      if(item.quantity){
        total += item.quantity * item.buyerPrice
      }else{
        total += item.quantity
      }
    })
    return total
  }
  const updateCartQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
        ...item,
          quantity: quantity,
        };
      }
      return item;
    });
    setCart([...updatedCart]);
    localStorage.setItem('cart', JSON.stringify([...updatedCart]));
  }

  const isInCart = (id) =>{
    return cart.some((item) => item?.id === id)
  }



  return (
    <CartContext.Provider value={{ cart,isInCart,updateCartQuantity,totalAmount, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};