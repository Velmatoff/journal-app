import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./reducers/auth-reduser";
import {journalReducer} from "./reducers/journal-reduser";
import {interfaceAppReducer} from "./reducers/interfaceApp-reduser";

let reducers = combineReducers(
    {
        auth: authReducer,
        journal: journalReducer,
        interfaceApp: interfaceAppReducer,
    }
);


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
