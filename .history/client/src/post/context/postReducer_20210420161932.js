import { ADD_POST } from "./postConstants";

const postReducer = (state,action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                post:[action.payload,...state.post],
                loading:false
            };
        default:
            return state;
    }   
}

export default postReducer;