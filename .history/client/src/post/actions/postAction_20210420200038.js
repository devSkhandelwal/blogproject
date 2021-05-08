import axios from 'axios'
import {POST_CREATE_REQUEST} from '../constants/postConstants'

const postCreateAction = () => async(dispatch) =>{
    dispatch({
        type:POST_CREATE_REQUEST
    })

    const {data} = axios
}