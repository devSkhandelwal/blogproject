import React,{useReducer} from 'react';
import axios from 'axios';
import postContext from './postContext';
import postReducer from './postReducer'

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
            const res = await axios.post('http://')
        }
    }

    return (
        <div>
            
        </div>
    )
}

export default postState
