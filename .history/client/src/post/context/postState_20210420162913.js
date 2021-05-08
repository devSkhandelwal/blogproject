import React,{useReducer} from 'react';
import axios from 'axios';
import postContext from './postContext';
import postReducer from './postReducer'
import { ADD_POST } from './postConstants';

const postState = (props) => {

    const initialState = {
        posts:null,
        error:null
    }



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
            dispatch({})
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default postState
