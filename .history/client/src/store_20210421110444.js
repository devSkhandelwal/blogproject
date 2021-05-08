import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginAction, userRegisterAction } from './user/actions/userAction';
import { CreatePostReducer } from './post/reducer/postReducer';


const reducer = combineReducers({
    register:userRegisterAction,
    login:userLoginAction,
    createPost:CreatePostReducer
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