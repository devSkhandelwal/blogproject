import axios from 'axios'

import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"

export const userRegisterAction = (name,email,password) => async(dispatch) => {
    console.log(name,email,password)
    try{
        dispatch({
            type:USER_REGISTER_REQUEST
        })

        const config = {
            headers:{
                "content-Type" : "application/json"
            }
        }

        const {data} = await axios.post('/register',{name,email,password},config)

        

        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        });
    }catch(error){
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.message ? 
            error.reaponse.data.message : error.message
        })
    }
}

export const userLoginAction = (email,password) => async(dispatch) => {
    try{
        dispatch({
            type:USER_LOGIN_REQUEST
        })

        const config = {
            headers:{
                "content-Type" : "application/json"
            }
        }

        const {data} = await axios.post('/login',{email,password},config)
        console.log(data)   
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        });
    }catch(error){
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message ? 
            error.reaponse.data.message : error.message
        })
    }
}