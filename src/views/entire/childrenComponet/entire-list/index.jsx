import {memo, useEffect, useState} from "react";
import {shallowEqual, useSelector} from "react-redux";

import EntireListWrapper from "./style/style";
import SectionItem from "../../../../components/section-item";

const EntireList = memo(() => {
    // 开始展示我们的数据
    const {entireList, isLoading} = useSelector(state => {
        return {
            entireList :state.entire.entireList,
            isLoading :state.entire.isLoading
        }
    }, shallowEqual)

    const [avg, setAvg] = useState("25%")
    useEffect(() => {
        const innerWidth  = window.innerWidth
        innerWidth  > 375 ? setAvg("25%") : setAvg("50%")
    }, []);

    return (
        <EntireListWrapper>
            <div className="entire-list-content">
                {
                    entireList.map((item) => {
                        return <SectionItem
                            item={item}
                            avg={avg}
                            key={item.id}
                        />
                    })
                }
            </div>

            {
                isLoading && <div className="entire-list-cover"></div>
            }
        </EntireListWrapper>
    )
})

export default EntireList