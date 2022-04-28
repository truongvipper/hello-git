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
            return { ...state, isLoading: false, errMess: null, staff: action.payload };
        case ActionTypes.DEPART_LOADING:
            return { ...state, isLoading: true, errMess: null, staff: [] };
        case ActionTypes.FAILED_DEPART:
            return { ...state, isLoading: false, errMess: action.payload, staff: [] }
        default:
            return state
    }
}