import { createContext,useReducer,useContext, useEffect } from "react";
import reducer from "../reducer/cartReducer";


const CartContext = createContext();
const getLocalCartData = () => {
    let localCartData=localStorage.getItem("mycart");
    if(localCartData===null){
        return [];
    }
    else{
        return JSON.parse(localCartData);
    }
}
const initialState = {
    cart: getLocalCartData(),
    total_item:" ",
    total_amount: 0,
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
const addToCart=(item_id, amount, curElem)=>{
        dispatch({type:"ADD_TO_CART", payload:{item_id, amount, curElem}})
    }
const removeItem=(id)=>{
    dispatch({type:"REMOVE_ITEM", payload:id})
}
useEffect(()=>{
    localStorage.setItem("mycart", JSON.stringify(state.cart))
},[state.cart])

    return (<CartContext.Provider value={{ ...state, addToCart, removeItem}}>{children}</CartContext.Provider>);
}
const useCartContext = () => {
    return useContext(CartContext);
}
export{CartProvider, useCartContext}