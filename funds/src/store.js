import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { fundDetailsReducer, fundListReducer } from './reducers/fundsReducers'



const reducers = combineReducers({
    fundList: fundListReducer,
    fundDetails: fundDetailsReducer,
});

const initialState = { };

const middleware = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

