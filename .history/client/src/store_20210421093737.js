import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginAction, userRegisterAction } from './user/actions/userAction';


const reducer = combineReducers({
    register:userRegisterAction,
    login:userLoginAction
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(...applyMiddleware(middleware))
)

export default store;