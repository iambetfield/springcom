import { api } from "../../config/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"


export const addItemToCart = (reqData: any) => async (dispatch: any) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })

    try {

        console.log("4.0 data: ", reqData);
        const { data } = await api.put("/api/cart/add", reqData)

        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
        console.log("4.1. Add Item to cart: ", data)
    } catch (error: any) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })

    }
}

export const removeItemToCart = (cartItemId:any) => async (dispatch: any) => {
    dispatch({ type: REMOVE_CART_ITEM_REQUEST })

    try {
        await api.delete(`/api/cart_items/${cartItemId}`)
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId })
    } catch (error: any) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })

    }
};

export const updateItemToCart = (reqData: any) => async (dispatch: any) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })

    console.log("la data que viene para update es : ", reqData);
    console.log("la cantidad es :" ,reqData.data.quantity)

    try {
        const { data } = await api.put(`/api/cart_items/${reqData.cartItemId}`, reqData.data)
        console.log("7. producto actualizado")
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
    } catch (error: any) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })

    }
};


export const getCart = () => async (dispatch: any) => {
    dispatch({ type: GET_CART_REQUEST })

    try {
        const { data } = await api.get(`/api/cart/`)
        dispatch({ type: GET_CART_SUCCESS, payload: data })
        console.log("6. cart: ", data)
    } catch (error: any) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message })

    }
}