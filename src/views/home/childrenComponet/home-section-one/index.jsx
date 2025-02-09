import {memo, useState, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import SectionAll from "../../../../components/section-all";
import {LazyPage} from "../../../../components/app-lazy/lazyPage";
import {fetchHighPriceGoodsInfoDataAction} from "../../../../store/modules/home";
import SectionOneWrapper from "./style/style";

const HomeSectionOne = memo(() => {
    const [isLoading, setIsLoading] = useState(true)

    const { HighPriceGoodsInfo } = useSelector(state => ({
        HighPriceGoodsInfo: state.home.HighPriceGoodsInfo
    }), shallowEqual)

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchHighPriceGoodsInfoDataAction()).then(res => {
                setIsLoading(false)
            }, err => {
                console.log(err)
            })
        }
        fetchData()
    }, [dispatch])

    if (isLoading || !HighPriceGoodsInfo || !HighPriceGoodsInfo.goodsList) {
        return <LazyPage/>
    }

    return (
        <SectionOneWrapper>
            <SectionAll
                data={HighPriceGoodsInfo}
            />
        </SectionOneWrapper>
    )
})

export default HomeSectionOne