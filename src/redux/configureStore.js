import {createStore,applyMiddleware,combineReducers} from 'redux';
import { Reducer,initialState } from './reducer';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import {InitialFeedback} from './form'
export const ConfigureStore=()=>{
    // Reducer,initialState
    const store=createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            leaders:Leaders,
            promotions:Promotions,
            ...createForms({
                feedback:InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store;
}