import { ADD_POST, ERROR_POST } from "./postConstants";

const postReducer = (state,action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                post:[action.payload,...state.post],
                loading:false
            };
        case ERROR_POST:
            return{
                ...state,
                error:
            }
        default:
            return state;
    }   
}

export default postReducer;