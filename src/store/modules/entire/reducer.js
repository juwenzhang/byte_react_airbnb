import * as ActionTypes from "./constants"

const initialState = {
    currentPage: 0,
    entireList: [],
    totalCount: 0,
    isLoading: false
}

function entireReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case ActionTypes.CHANGE_ENTIRE_LIST:
            return {
                ...state,
                entireList: action.entireList
            }
        case ActionTypes.CHANGE_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            }
        case ActionTypes.CHANGE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default entireReducer