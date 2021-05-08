import { ADD_POST } from "./postConstants";

export default (state,action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                post:[action.payload,...state.post],
                loading:false
            }
        default:
            return  state
    }   
}