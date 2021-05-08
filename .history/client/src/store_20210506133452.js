import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { CreatePostReducer, getPostsReducer,detailsPostReducer, updatePostReducer } from './post/reducer/postReducer';
import { listUserReducer, loginUserReducer, registerUserReducer } from './user/reducer/userReducer';


const reducer = combineReducers({
    register:registerUserReducer,
    login:loginUserReducer,
    createPost:CreatePostReducer,
    postList:getPostsReducer,
    postDetails:detailsPostReducer,
    updatePost:updatePostReducer,
    userList:listUserReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')):[]

const initialState = {
    login:{userInfo:userInfoFromStorage}
}


const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;