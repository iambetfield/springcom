import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";


const token = localStorage.getItem("jwt");

const registerRequest=()=>({type:REGISTER_REQUEST});
const registerSuccess=(user:any)=>({type:REGISTER_SUCCESS, payload:user});
const registerFailure=(error:any)=>({type:REGISTER_FAILURE, payload:error});


export const register = (userData:any) => async (dispatch:any)=>{

   (registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = response.data;
   

        if(user.jwt){
            localStorage.setItem("jwt", user.jwt);
        }
        dispatch(registerSuccess(user.jwt));
        console.log("user success" + user);
        console.log(user.jwt)
    } catch (error) {
        dispatch(registerFailure(error));
        console.log(error);
    }
}



const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user:any)=>({type:LOGIN_SUCCESS, payload:user});
const loginFailure=(error:any)=>({type:LOGIN_FAILURE, payload:error});

export const login = (userData:any)=>async (dispatch:any)=>{

    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        const user = response.data;

        if(user.jwt){
            localStorage.setItem("jwt", user.jwt);
        }
        dispatch(loginSuccess(user.jwt));
        console.log("user " + user);
    } catch (error) {
        dispatch(loginFailure(error));
        console.log(error);
    }
}

const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user:any)=>({type:GET_USER_SUCCESS, payload:user});
const getUserFailure=(error:any)=>({type:GET_USER_FAILURE, payload:error});

export const getUser = (jwt:string) => async (dispatch:any)=>{

    dispatch(getUserRequest());
    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`,{
            headers:{
                "Authorization": `Bearer ${jwt}`
            }
        });
        const user = response.data;
        console.log("GET User")
        console.log(user);

        dispatch(getUserSuccess(user));
    } catch (error) {
        dispatch(getUserFailure(error));
        
    }
}

export const logout =()=> (dispatch:any)=> {

    dispatch({type:LOGOUT, payload:null});
    localStorage.clear();

}