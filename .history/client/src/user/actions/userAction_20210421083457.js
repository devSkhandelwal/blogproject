import axios from 'axios'

import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/userConstants"

export const userRegisterAction = (name,email,password) => async(dispatch) => {
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