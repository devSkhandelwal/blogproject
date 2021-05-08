import { POST_CREATE_REQUEST } from "../constants/postConstants";

export const postCreateReducer = (state,action) => {
    switch(action.type){
        case POST_CREATE_REQUEST:
            return {loading:true,data:action.payload}
    }
}