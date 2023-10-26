
import { API_BASE_URL, api } from "../../config/apiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";

export const createOrder = (reqData:any) => async (dispatch:any) => {
    dispatch({type: CREATE_ORDER_REQUEST});
    try {

       console.log("ORDER DATA: ", reqData)


        const {data} = await api.post(`/api/orders/`,
            reqData.address,
            
        );

        if(data.id){
            reqData.navigate({search: `step=3&order_id=${data.id}`});
        }
        console.log("created order - ", data);
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data,
        });
    } catch (error:any) {
        console.log("catch error: ", error);
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: 
            error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};

export const getOrderById = (orderId:any)=> async (dispatch: any) => {
    dispatch({type:GET_ORDER_BY_ID_REQUEST});
    console.log(" 8.0 order by id: ", orderId);
    try {
        const {data} = await api.get( `api/orders/${orderId}`);
        
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS, payload:data,
        });
        console.log("LA ORDEN TRAIDA: ", )
    } catch (error:any) {
        console.log("catch ", error)
        dispatch({type: GET_ORDER_BY_ID_FAILURE, payload: error.message});
        
    }
}