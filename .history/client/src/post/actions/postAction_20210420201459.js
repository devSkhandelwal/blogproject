import axios from 'axios'
import {POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_DELETE_FAIL, POST_DELETE_REQUEST, POST_DELETE_SUCCESS, POST_DETAILS_FAIL, POST_DETAILS_REQUEST, POST_DETAILS_SUCCESS, POST_LIST_FAIL, POST_LIST_REQUEST, POST_LIST_SUCCESS, POST_UPDATE_FAIL, POST_UPDATE_REQUEST, POST_UPDATE_SUCCESS} from '../constants/postConstants'

export const postCreateAction = ({title,description}) => async(dispatch) =>{
    try{
        dispatch({
            type:POST_CREATE_REQUEST
        });

        const config = {
            headers:{
                "content-Type":"application/json"
            }
        }

        const {data} = axios.post('/addpost',config,{title,description});

        dispatch({
            type:POST_CREATE_SUCCESS,
            payload:data
        });

    }catch(error){
        dispatch({
            type:POST_CREATE_FAIL,
            payload:
                error.response && error.response.data.message ?
                error.response.data.message :error.message
        });
    }
};

export const postListAction = () => async(dispatch) =>{
    try{
        dispatch({
            type:POST_LIST_REQUEST
        });


        const {data} = axios.get('/getposts');

        dispatch({
            type:POST_LIST_SUCCESS,
            payload:data
        });

    }catch(error){
        dispatch({
            type:POST_LIST_FAIL,
            payload:
                error.response && error.response.data.message ?
                error.response.data.message :error.message
        });
    }
};

export const postDetailsAction = () => async(dispatch) =>{
    try{
        dispatch({
            type:POST_DETAILS_REQUEST
        });

        const {data} = axios.get('/getpost');

        dispatch({
            type:POST_DETAILS_SUCCESS,
            payload:data
        });

    }catch(error){
        dispatch({
            type:POST_DETAILS_FAIL,
            payload:
                error.response && error.response.data.message ?
                error.response.data.message :error.message
        });
    }
};

export const postUpdateAction = ({title,description}) => async(dispatch) =>{
    try{
        dispatch({
            type:POST_UPDATE_REQUEST
        });

        const config = {
            headers:{
                "content-Type":"application/json"
            }
        }

        const {data} = axios.post('/update/post',config,{title,description});

        dispatch({
            type:POST_UPDATE_SUCCESS,
            payload:data
        });

    }catch(error){
        dispatch({
            type:POST_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message ?
                error.response.data.message :error.message
        });
    }
};


export const postDeleteAction = ({title,description}) => async(dispatch) =>{
    try{
        dispatch({
            type:POST_DELETE_REQUEST
        });

        const config = {
            headers:{
                "content-Type":"application/json"
            }
        }

        const {data} = axios.post('/update/post',config,{title,description});

        dispatch({
            type:POST_DELETE_SUCCESS,
            payload:data
        });

    }catch(error){
        dispatch({
            type:POST_DELETE_FAIL,
            payload:
                error.response && error.response.data.message ?
                error.response.data.message :error.message
        });
    }
};