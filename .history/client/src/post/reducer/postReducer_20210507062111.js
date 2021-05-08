import { 
        POST_CREATE_FAIL, 
        POST_CREATE_REQUEST, 
        POST_CREATE_SUCCESS, 
        POST_DETAILS_FAIL, 
        POST_DETAILS_REQUEST, 
        POST_DETAILS_SUCCESS, 
        POST_LIST_FAIL, 
        POST_LIST_REQUEST, 
        POST_LIST_SUCCESS, 
        POST_UPDATE_FAIL, 
        POST_UPDATE_REQUEST, 
        POST_UPDATE_SUCCESS,
        POST_DELETE_REQUEST,
        POST_DELETE_SUCCESS,
        POST_DELETE_FAIL, 
        MY_POST_LIST_REQUEST,
        MY_POST_LIST_SUCCESS,
        MY_POST_LIST_FAIL} from "../constants/postConstants";

export const CreatePostReducer = (state={},action) => {
    switch(action.type){
        case POST_CREATE_REQUEST:
            return {loading:true}
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
        case POST_LIST_SUCCESS:
            return {loading:false,posts:action.payload}
        case POST_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const getMyPostsReducer = (state={myPosts:[]},action) => {
    switch(action.type){
        case MY_POST_LIST_REQUEST:
            return {loading:true,myPosts:[]}
        case MY_POST_LIST_SUCCESS:
            return {loading:false,myPosts:action.payload}
        case MY_POST_LIST_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const detailsPostReducer = (state={post:{}},action) => {
    switch(action.type){
        case POST_DETAILS_REQUEST:
            return {loading:true,post:{}}
        case POST_DETAILS_SUCCESS:
            return {loading:false,post:action.payload}
        case POST_DETAILS_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const updatePostReducer = (state={},action) => {
    switch(action.type){
        case POST_UPDATE_REQUEST:
            return {loading:true}
        case POST_UPDATE_SUCCESS:
            return {loading:false,data:action.payload}
        case POST_UPDATE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}

export const deletePostReducer = (state={},action) => {
    switch(action.type){
        case POST_DELETE_REQUEST:
            return {loading:true}
        case POST_DELETE_SUCCESS:
            return {loading:false,data:action.payload}
        case POST_DELETE_FAIL:
            return {loading:false,error:action.payload}
        default:
            return state;
    }
}