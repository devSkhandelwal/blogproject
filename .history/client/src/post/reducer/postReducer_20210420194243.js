import { POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, POST_LIST_REQUEST } from "../constants/postConstants";

export const CreatePostReducer = (state={},action) => {
    switch(action.type){
        case POST_CREATE_REQUEST:
            return {loading:true,data:action.payload}
        case POST_CREATE_SUCCESS:
            return {loading:false,data:action.payload}
        case POST_CREATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}


export const getPostsReducer = (state={posts:[]},action) => {
    switch(action.type){
        case POST_LIST_REQUEST:
            return {loading:true,posts:[]}
        case POST_CREATE_SUCCESS:
            return {loading:false,posts:action.payload}
        case POST_CREATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const postCreateReducer = (state={post={}},action) => {
    switch(action.type){
        case POST_CREATE_REQUEST:
            return {loading:true,post:{}}
        case POST_CREATE_SUCCESS:
            return {loading:false,post:action.payload}
        case POST_CREATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const postCreateReducer = (state,action) => {
    switch(action.type){
        case POST_CREATE_REQUEST:
            return {loading:true,data:action.payload}
        case POST_CREATE_SUCCESS:
            return {loading:false,data:action.payload}
        case POST_CREATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const postCreateReducer = (state,action) => {
    switch(action.type){
        case POST_CREATE_REQUEST:
            return {loading:true,data:action.payload}
        case POST_CREATE_SUCCESS:
            return {loading:false,data:action.payload}
        case POST_CREATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}