import axios from 'axios'

import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"

export const userRegisterAction = (name,email,password) => async(dispatch) => {
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        
        
        const {data} = await axios.post("/register",{name,email,password})
        console.log(data)
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
    }catch(error){
        console.log(console.error();)
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message
        })
    }
}

export const userLoginAction = (email,password) => async(dispatch) => {


    

    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const {data} = await axios.post("/login",{email,password})

        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(error){
        console.log(error.response)
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message 
            ? error.response.data.message : error.message
        })
    }

}