import {combineReducers, createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Staff } from './staff';
import { Depart } from './depart';

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            staff:Staff,
            depart:Depart
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}