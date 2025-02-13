import {memo, useEffect, useState} from 'react';

import HomeSectionLongForWrapper from "./style/style";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchLongForInfoDataAction} from "../../../../store/modules/home";
import {LazyPage} from "../../../../components/app-lazy/lazyPage";
import SectionHeader from "../../../../components/section-header";
import SectionLongForItem from "../../../../components/section-long-for-item";
import JzhScrollView from "../../../../base-ui/jzh-scroll-view";

const HomeSectionLongFor = memo(() => {
    const [isLoading, setIsLoading] = useState(true)

    const { LongForInfo } = useSelector(state => ({
        LongForInfo: state.home.LongForInfo
    }), shallowEqual)

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchLongForInfoDataAction()).then(res => {
                setIsLoading(false)
            }, err => {
                console.log(err)
            })
        }
        fetchData()
    }, [dispatch])

    if (isLoading || !LongForInfo || !LongForInfo.goodsList) {
        return <LazyPage/>
    }

    return (
        <HomeSectionLongForWrapper>
            <SectionHeader
                title={LongForInfo?.title}
                desc={LongForInfo?.desc}
            />
            <div className="long-for-list">
                <JzhScrollView>
                    {
                        LongForInfo?.goodsList.map(item => {
                            return (
                                <div key={item?.id} className="long-for-item">
                                    <SectionLongForItem
                                        goodsItem={item || {}}
                                        address={item?.address || ""}
                                        category={item?.category || ""}
                                    />
                                </div>
                            )
                        })
                    }
                </JzhScrollView>
            </div>
        </HomeSectionLongForWrapper>
    )
})

export default HomeSectionLongFor;