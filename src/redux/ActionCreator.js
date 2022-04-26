import { Staff } from "./staff";
import * as ActionTypes from './ActionType'
import { baseUrl } from "../share/baseUrl";

export const fetchStaff=()=>(dispatch)=>{
    dispatch(staffLoading(true));
    return fetch(baseUrl+'staff')
    .then(response=>response.json())
    .then(staff=>dispatch(addStaff(staff)))
}


export const staffLoading = () =>({
    type:ActionTypes.STAFF_LOADING
})

export const staffErros=(errmess)=>({
    type:ActionTypes.FAILED_STAFF,
    payload:errmess
})
export const addStaff=(staff)=>({
    type:ActionTypes.ADD_STAFF,
    payload:staff
})
