import { DEPARTMENTS, } from "../share/staff";
import * as ActionTypes from './ActionType'
export const Depart=(state={
    isLoading:true,
    depart:[],
    errMess: null,
}
    ,action)=>{
    switch(action.type){
        case ActionTypes.ADD_DEPART:
            return { ...state, isLoading: false, errMess: null, depart: action.payload };
        case ActionTypes.DEPART_LOADING:
            return { ...state, isLoading: true, errMess: null, depart: [] };
        case ActionTypes.FAILED_DEPART:
            return { ...state, isLoading: false, errMess: action.payload, depart: [] }
        default:
            return state
    }
}