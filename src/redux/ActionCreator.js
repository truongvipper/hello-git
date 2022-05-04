import { Staff } from "./staff";
import * as ActionTypes from './ActionType'
import { baseUrl } from "../share/baseUrl";

export const fetchStaff=()=>(dispatch)=>{
    dispatch(staffLoading(true));
    return fetch(baseUrl+'staff')
    .then(response=>response.json())
    .then(staff=>dispatch(addStaff(staff)))
}

export const fetchDepart=()=>(dispatch)=>{
    dispatch(departLoading(true));
    return fetch(baseUrl+'depart')
    .then(response=>response.json())
    .then(depart=>dispatch(addDepart(depart)))
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


export const departLoading=()=>({
    type:ActionTypes.DEPART_LOADING
})

export const departError=(errmess)=>({
    type:ActionTypes.FAILED_DEPART,
    payload:errmess
})
export const addDepart=(depart)=>({
    type:ActionTypes.ADD_DEPART,
    payload:depart
})