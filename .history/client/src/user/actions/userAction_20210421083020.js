import axios from 'axios'

import { USER_REGISTER_REQUEST } from "../constants/userConstants"

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

        const {data} = await axios.post('/register',{name,email,password})
    }
}