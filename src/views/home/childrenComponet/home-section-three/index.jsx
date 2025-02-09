import {memo, useState, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import SectionAll from "../../../../components/section-all";
import {LazyPage} from "../../../../components/app-lazy/lazyPage";
import {fetchLowerPriceGoodsInfoDataAction} from "../../../../store/modules/home";
import SectionThreeWrapper from "./style/style";

const HomeSectionThree = memo(() => {
    const [isLoading, setIsLoading] = useState(true)

    const { LowerPriceGoodsInfo } = useSelector(state => ({
        LowerPriceGoodsInfo: state.home.LowerPriceGoodsInfo
    }), shallowEqual)

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchLowerPriceGoodsInfoDataAction()).then(res => {
                setIsLoading(false)
            }, err => {
                console.log(err)
            })
        }
        fetchData()
    }, [dispatch])

    if (isLoading || !LowerPriceGoodsInfo || !LowerPriceGoodsInfo.goodsList) {
        return <LazyPage/>
    }

    return (
        <SectionThreeWrapper>
            <SectionAll
                data={LowerPriceGoodsInfo}
            />
        </SectionThreeWrapper>
    )
})

export default HomeSectionThree