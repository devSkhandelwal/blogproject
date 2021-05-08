import { ADD_POST, ERROR_POST } from "./postConstants";

const postReducer = (state,action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                posts:[action.payload],
                loading:false
            };
        case ERROR_POST:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
    console.log(posts)   
}

export default postReducer;