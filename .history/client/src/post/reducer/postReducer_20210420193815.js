import { POST_CREATE_FAIL, POST_CREATE_REQUEST, POST_CREATE_SUCCESS } from "../constants/postConstants";

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