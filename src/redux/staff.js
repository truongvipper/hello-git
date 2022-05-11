
import * as ActionTypes from './ActionType'

export const Staff = (state = {
    isLoading: true,
    errMess: null,
    staffs: [],
    staffDetail: {}
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_STAFF:
            return { ...state, isLoading: false, errMess: null, staff: action.payload };
        case ActionTypes.ADD_ONE_STAFF:
            return { ...state, isLoading: false, errMess: null, staffDetail: action.payload };
        case ActionTypes.STAFF_LOADING:
            return { ...state, isLoading: true, errMess: null, staff: [] }; //và luôn set loading bằng true
        case ActionTypes.STAFF_LOADED:
            return { ...state, isLoading: false, errMess: null };
        case ActionTypes.FAILED_STAFF:
            return { ...state, isLoading: false, errMess: action.payload, staff: [] }
        default:
            return state
    }
}