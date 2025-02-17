import { memo } from "react";
import {Pagination} from "antd";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types"

import EntirePaginationWrapper from "./style/style";
import {fetchEntireList} from "../../../../store/modules/entire/createActions";

const EntirePagination = memo((props) => {
    const {
        goodsList
    } = props

    const {
        totalCount,
        currentPage,
        entireList
    } = useSelector((state) => {
        return {
            totalCount: state.entire.totalCount,
            currentPage: state.entire.currentPage,
            entireList: state.entire.entireList
        }
    })

    const startCount = currentPage * entireList.length + 1
    const endCount = (currentPage + 1) * entireList.length

    const dispatch = useDispatch()
    function PageChangeHandle(page, pageSize) {
        window.scrollTo(0, 0)
        dispatch(fetchEntireList(goodsList, page - 1, pageSize))
    }

    return (
        <EntirePaginationWrapper>
            <div className="entire-pagination">
                <Pagination
                    align="center"
                    defaultPage={0}
                    total={totalCount}
                    pageSizeOptions={[entireList.length || 20]}
                    defaultPageSize={entireList.length || 20}
                    responsive={true}
                    onChange={(page, pageSize) => PageChangeHandle(page, pageSize)}
                />
                <div className="entire-pagination-desc">
                    第{startCount}-{endCount}条/共{totalCount}条数据
                </div>
            </div>
        </EntirePaginationWrapper>
    )
})

EntirePagination.prototype = {
    goodsList: PropTypes.array.isRequired
}

export default EntirePagination