
'use client'
import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialStateCart = {
    cartData: []
}
const cartReducer = (stateCart, action) => {
    console.log(action.payload, 'payload');
    if (action.type === "ADD-TO-CART") {
        const isItemInCart = stateCart.cartData.some((item) => item.id === action.payload.id)
        if (isItemInCart) {
            console.log('Item is in cart');
            return stateCart

        } return {
            ...stateCart, cartData: [...stateCart.cartData, action.payload]
        }
    } if (action.type === 'REMOVE-FROM-CART') {
        const updatedCart = stateCart.cartData.filter((item) => item.id !== action.payload.id)
        if (updatedCart) {
            return {
                ...stateCart, cartData: updatedCart
            }
        }
    } else {
        return stateCart
    }
}


export const CartProvider = ({ children }) => {
    const [stateCart, dispatchCart] = useReducer(cartReducer, initialStateCart);
    console.log(stateCart, 'stateCart');
    // const addToCart =(item)=>{
    //     dispatchCart({ type: 'ADD_TO_CART', payload: item });
    // }
    return (
        <CartContext.Provider value={{ stateCart, dispatchCart }}>
            {children}
        </CartContext.Provider>
    )

}

