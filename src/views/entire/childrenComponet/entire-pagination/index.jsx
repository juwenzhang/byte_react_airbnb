import { memo } from "react";
import {Pagination} from "antd";
import {useSelector} from "react-redux";

import EntirePaginationWrapper from "./style/style";

const EntirePagination = memo(() => {
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

    return (
        <EntirePaginationWrapper>
            <div className="entire-pagination">
                <Pagination
                    align="center"
                    defaultPage={0}
                    total={totalCount}
                    pageSizeOptions={[entireList.length]}
                    defaultPageSize={entireList.length}
                    responsive={true}

                />
                <div className="entire-pagination-desc">
                    第{startCount}-{endCount}条/共{totalCount}条数据
                </div>
            </div>
        </EntirePaginationWrapper>
    )
})

export default EntirePagination