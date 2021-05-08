import React,{useReducer} from 'react';
import axios from 'axios';
import PostContext from './PostContext';
import postReducer from './postReducer'
import { ADD_POST, ERROR_POST } from './postConstants';

const PostState = (props) => {

    const initialState = {
        posts:null,
        error:null
    };

    const [state, dispatch] = useReducer(postReducer, initialState);

    const addPost =async (post)=>{
        const config = {
            headers:{
                "Content-Type": "application/json",
            }
        }
        try{
            const res = await axios.post('http://localhost:5000/api/addpost',post,config)
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
        <PostContext.Provider
            value={{
                
            }}
        >
            
        </PostContext.Provider>
    )
}

export default PostState
