import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_CATEGORY_FAILURE, FIND_PRODUCT_BY_CATEGORY_REQUEST, FIND_PRODUCT_BY_CATEGORY_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

export const findProducts = (reqData: any) => async (dispatch: any) => {
    dispatch({type: FIND_PRODUCTS_REQUEST})

    const { colors, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize } = reqData;
    try {
       const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}
       &maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}
       &pageNumber=${pageNumber}&pageSize=${pageSize}`)
       
       //console.log("product data :", data);
       //console.log("número de página que paso por parámetro: " , pageNumber)
       //console.log("color: " , colors)

       dispatch({type:FIND_PRODUCTS_SUCCESS, payload:data})
    } catch (error:any) {
        dispatch({type:FIND_PRODUCTS_FAILURE, payload:error.message})
    }

};

export const findProductsById = (reqData: any) => async (dispatch: any) => {
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})

    const { productId} = reqData;
 

    console.log("1. productId antes de mandar: ", productId);
    try {
       const {data} = await api.get(`/api/products/id/${productId}`)
        console.log("2. data que traigo: ", data);
        console.log("2.1 URL de la imagen: ", data.imageUrl)
       dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS, payload:data})
    } catch (error:any) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:error.message})
    }

};


export const findProductsByCategory = (reqData: string) => async(dispatch:any)=>{
    dispatch({type: FIND_PRODUCT_BY_CATEGORY_REQUEST});
    console.log("LA DATA QUE MANDAMOS ES:", reqData);

    try {
        const response = await api.get(`/api/products/${reqData}`);
        const data = response.data;
        dispatch({type:FIND_PRODUCT_BY_CATEGORY_SUCCESS, payload: data})
    } catch (error:any) {
        dispatch({type:FIND_PRODUCT_BY_CATEGORY_FAILURE, payload: error.message})
        
    }
}

