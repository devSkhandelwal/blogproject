import axios from 'axios'
import {
    POST_CREATE_FAIL, 
    POST_CREATE_REQUEST, 
    POST_CREATE_SUCCESS, 
    POST_DELETE_FAIL, 
    POST_DELETE_REQUEST, 
    POST_DELETE_SUCCESS, 
    POST_DETAILS_FAIL, 
    POST_DETAILS_REQUEST, 
    POST_DETAILS_SUCCESS, 
    POST_LIST_FAIL, 
    POST_LIST_REQUEST, 
    POST_LIST_SUCCESS, 
    POST_UPDATE_FAIL, 
    POST_UPDATE_REQUEST, 
    POST_UPDATE_SUCCESS } from '../constants/postConstants'

export const postCreateAction = (title,description) => async(dispatch,getState) =>{
    console.log(title,description)
    try{
        dispatch({
            type:POST_CREATE_REQUEST
        });

        const {login:{userInfo}} = getState()

        

        const config = {
            headers:{
                "content-Type":"application/json",
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const {data} =await axios.post('/addpost',{title,description},config);
        console.log(data)
        dispatch({
            type:POST_CREATE_SUCCESS,
            payload:data
        });

    }catch(error){
        console.log(error.response)
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


        const {data} = await axios.get('/getposts');

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

export const postListAction = () => async(dispatch,getState) =>{

    try{
        dispatch({
            type:POST_LIST_REQUEST
        });



        const {data} = await axios.get('/myposts');

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

export const postDetailsAction = (postId) => async(dispatch) =>{
    try{
        dispatch({
            type:POST_DETAILS_REQUEST
        });

        const {data} = await axios.get(`/post/${postId}`);

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

export const postUpdateAction = (id,title,description) => async(dispatch,getState) =>{
    console.log(title,description)
    try{
        dispatch({
            type:POST_UPDATE_REQUEST
        });

        const {login:{userInfo}} = getState()
        

        const config = {
            headers:{
                "content-Type":"application/json",
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const {data} = await axios.patch(`/update/post/${id}`,{title,description},config);

        console.log(data)
        dispatch({
            type:POST_UPDATE_SUCCESS,
            payload:data
        });

    }catch(error){
        console.log(error.response)
        dispatch({
            type:POST_UPDATE_FAIL,
            payload:
                error.response && error.response.data.message ?
                error.response.data.message :error.message
        });
    }
};


export const postDeleteAction = (id) => async(dispatch,getState) =>{
    try{
        dispatch({
            type:POST_DELETE_REQUEST
        });
        const {login:{userInfo}} = getState()

        

        const config = {
            headers:{
                "content-Type":"application/json",
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        const {data} = await axios.delete(`/delete/post/${id}`,{},config);

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