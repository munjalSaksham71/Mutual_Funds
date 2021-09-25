import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { fundDetailsReducer, fundListReducer, fundSearchListReducer } from './reducers/fundsReducers'
import {userLoginReducer, userDetailsReducer, userRegisterReducer, userUpdateProfileReducer} from './reducers/userReducers'


const reducers = combineReducers({
    fundList: fundListReducer,
    fundDetails: fundDetailsReducer,
    fundSearchList: fundSearchListReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = { 
    userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

