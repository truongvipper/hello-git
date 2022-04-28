
import * as ActionTypes from './ActionType'

export const Staff = (state = {
    isLoading: true,
    errMess: null,
    staff: []
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_STAFF:
            return { ...state, isLoading: false, errMess: null, staff: action.payload };
        case ActionTypes.STAFF_LOADING:
            return { ...state, isLoading: true, errMess: null, staff: [] };
        case ActionTypes.FAILED_STAFF:
            return { ...state, isLoading: false, errMess: action.payload, staff: [] }
        default:
            return state
    }
}