import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


export const addItemToCart=(reqData:any)=> async(dispatch:any)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})

    try {
        const{data} = await api.put("/api/cart/add",reqData.data)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS, payload:data})
    } catch (error:any) {
        dispatch({type:ADD_ITEM_TO_CART_FAILURE, payload:error.message})
        
    }
}

export const removeItemToCart=(reqData:any)=> async(dispatch:any)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})

    try {
        const{data} = await api.delete(`/api/cart_items/${reqData.cartItemId}`)
        dispatch({type:REMOVE_CART_ITEM_SUCCESS, payload:data})
    } catch (error:any) {
        dispatch({type:REMOVE_CART_ITEM_FAILURE, payload:error.message})
        
    }
};

export const updateItemToCart=(reqData:any)=> async(dispatch:any)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})

    try {
        const{data} = await api.put(`/api/cart_items/${reqData.cartItemId}`, reqData)
        dispatch({type:UPDATE_CART_ITEM_SUCCESS, payload:data})
    } catch (error:any) {
        dispatch({type:UPDATE_CART_ITEM_FAILURE, payload:error.message})
        
    }
};


export const getCart=(reqData:any)=> async(dispatch:any)=>{
    dispatch({type:GET_CART_REQUEST})

    try {
        const{data} = await api.get(`/api/cart/`)
        dispatch({type:GET_CART_SUCCESS, payload:data})
    } catch (error:any) {
        dispatch({type:GET_CART_FAILURE, payload:error.message})
        
    }
}