import axios from 'axios'
import {POST_CREATE_REQUEST} from '../constants/postConstants'

const postCreateAction = ({title,description}) => async(dispatch) =>{
    try{
        dispatch({
        type:POST_CREATE_REQUEST
        })

        const config = {
            headers:{
                "content-Type":"application/json"
            }
        }

        const {data} = axios.post('/addpost',config,{title,description});

        
    }catch(error){

    }
}