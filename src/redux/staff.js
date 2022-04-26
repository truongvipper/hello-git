
import * as ActionTypes from './ActionType'

export const Staff=(state={
    isLoading:true,
    errMess:null,
    staff:[]
},action)=>{
    
    switch(action.type){
        case ActionTypes.ADD_STAFF:
            return {...state,isLoading:true,errMess:null,staff:action.payload}
        case ActionTypes.FAILED_STAFF:
            return {...state,isLoading:false,errMess:action.payload,staff:[]}
        case ActionTypes.STAFF_LOADING:
            return {...state,isLoading:true,errMess:null,staff:[]}
        default:
            return state
    }
}