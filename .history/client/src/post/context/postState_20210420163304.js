import React,{useReducer} from 'react';
import axios from 'axios';
import postContext from './postContext';
import postReducer from './postReducer'
import { ADD_POST, ERROR_POST } from './postConstants';

const postState = (props) => {

    const initialState = {
        posts:null,
        error:null
    }

    const [state, dispatch] = useReducer(postReducer, initialState);

    const addPost =async (post)=>{
        const config = {
            headers:{
                "Content-Type": "application/json",
            }
        }
        try{
            const res = await axios.post('http://',post,config)
            dispatch({
                type:ADD_POST,
                payload:res.data
            });
        }catch(err){
            dispatch({
                type:ERROR_POST,
                payload:err.response.msg
            })
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default postState
