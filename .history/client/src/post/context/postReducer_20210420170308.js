import { ADD_POST, ERROR_POST, GET_POSTS } from "./postConstants";

const postReducer = (state,action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts:[action.payload],
                loading:false
            };
        case GET_POSTS:
            return {
                ...state,
                posts:[action.payload],
                loading:false
            }
        case ERROR_POST:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
       
}

export default postReducer;