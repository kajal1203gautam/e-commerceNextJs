
'use client'
import { createContext, useReducer } from "react";

export const CartContext  = createContext();

const initialState = {
cartData: []
}
const cartReducer = (state, action)=>{
    console.log(action.payload, 'payload');  
if(action.type === "ADD-TO-CART"){
    return {
        ...state, cartData: [...state.cartData,action.payload]
    }
}else{
    return state
}

}


export const CartProvider = ({children})=>{
    const [state, dispatch] =  useReducer(cartReducer, initialState);
    console.log(state,'state');
    // const addToCart =(item)=>{
    //     dispatch({ type: 'ADD_TO_CART', payload: item });
    // }
    return(
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )

}

