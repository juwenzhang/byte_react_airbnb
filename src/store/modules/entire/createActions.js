import * as ActionTypes from "./constants"
import {getEntireData} from "../../../services/modules/entire";

export function changeCurrentPage(currentPage) {
    return {
        type: ActionTypes.CHANGE_CURRENT_PAGE,
        currentPage
    }
}

export function changeEntireList(entireList) {
    return {
        type: ActionTypes.CHANGE_ENTIRE_LIST,
        entireList
    }
}

export function changeIsLoading(isLoading) {
    return {
        type: ActionTypes.CHANGE_IS_LOADING,
        isLoading
    }
}

export function changeTotalCount(totalCount) {
    return {
        type: ActionTypes.CHANGE_TOTAL_COUNT,
        totalCount
    }
}


// 开始网络请求
export const fetchEntireList = (
    EntireList,
    page= 0,
    pageSize = 20
) => {
    return async (dispatch, getState) => {
        // 修改 dispatch
        console.log(page)
        dispatch(changeCurrentPage(page))
        dispatch(changeIsLoading(true))
        const currentPage = getState().entire.currentPage
        const res = await getEntireData(currentPage, pageSize)
        if (res) {
            const {entireList} = res.data
            dispatch(changeEntireList(entireList))
            dispatch(changeTotalCount(entireList?.length))
        } else {
            // console.log("请求失败")
            const entireList = EntireList.slice(pageSize * currentPage, pageSize * (currentPage + 1))
            dispatch(changeEntireList(entireList))
            dispatch(changeTotalCount(EntireList?.length))
        }
        dispatch(changeIsLoading(false))
    }
}