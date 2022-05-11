import * as ActionTypes from './ActionType'
import { baseUrl } from "../share/baseUrl";

export const fetchStaff=()=>(dispatch)=>{
    dispatch(staffLoading()); //có luôn rồi nè, chỗ này em set true cho nó load
    return fetch(baseUrl+'staff')
    .then(response=>response.json())
    .then(staff=>{
        dispatch(addStaff(staff))
        dispatch(staffLoaded()); //set thành falsed
    }) //mà chỗ này load xong em lại không set false để ngưng loading
}

export const fetchStaffDetail=(id)=>(dispatch)=>{
    dispatch(staffLoading()); //cho nó load
    return fetch(baseUrl+'staff/'+id)
    .then(response=>response.json())
    .then(staff=>{
        debugger
        dispatch(addOneStaff(staff))
    }); 
}


export const fetchDepart=()=>(dispatch)=>{
    dispatch(departLoading(true));
    return fetch(baseUrl+'depart')
    .then(response=>response.json())
    .then(depart=>dispatch(addDepart(depart)))
}


export const staffLoading = () =>({
    type:ActionTypes.STAFF_LOADING //trong khi nó không nhận tham số
})

export const staffLoaded = () =>({
    type:ActionTypes.STAFF_LOADED
})

export const staffErros=(errmess)=>({
    type:ActionTypes.FAILED_STAFF,
    payload:errmess
})

export const addStaff=(staff)=>({
    type:ActionTypes.ADD_STAFF,
    payload:staff
})

export const addOneStaff=(staff)=>({
    type:ActionTypes.ADD_ONE_STAFF,
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