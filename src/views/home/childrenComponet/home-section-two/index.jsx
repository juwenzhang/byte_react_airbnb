import {memo, useState, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import SectionAll from "../../../../components/section-all";
import {LazyPage} from "../../../../components/app-lazy/lazyPage";
import {fetchMiddlePriceGoodsInfoDataAction} from "../../../../store/modules/home";
import SectionTwoWrapper from "./style/style";

const HomeSectionTwo = memo(() => {
    const [isLoading, setIsLoading] = useState(true)

    const { MiddlePriceGoodsInfo } = useSelector(state => ({
        MiddlePriceGoodsInfo: state.home.MiddlePriceGoodsInfo
    }), shallowEqual)

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(fetchMiddlePriceGoodsInfoDataAction()).then(res => {
                setIsLoading(false)
            }, err => {
                console.log(err)
            })
        }
        fetchData()
    }, [dispatch])

    if (isLoading || !MiddlePriceGoodsInfo || !MiddlePriceGoodsInfo.goodsList) {
        return <LazyPage/>
    }

    return (
        <SectionTwoWrapper>
            <SectionAll
                data={MiddlePriceGoodsInfo}
                elementNum={9}
                showRows={3}
            />
        </SectionTwoWrapper>
    )
})

export default HomeSectionTwo