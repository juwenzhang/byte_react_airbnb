import {memo, useEffect, useState} from "react";
import HomeWrapper from "./style";
import HomeBanner from "./childrenComponet/Home-Banner/HomeBanner";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {fetchHighPriceGoodsInfoDataAction} from "../../store/modules/home";
import {LazyPage} from "../../components/lazy/lazyPage";
import HomeSectionHeader from "../../components/home-section-header";
import SectionItem from "../../components/section-item";

const Home = memo(() => {
    // 定义页面数据开始
    const [isLoading, setIsLoading] = useState(true);
    const { HighPriceGoodsInfo } = useSelector(state => ({
        HighPriceGoodsInfo: state.home.HighPriceGoodsInfo
    }), shallowEqual);

    // 网络请求
    const dispatch = useDispatch();
    useEffect(() => {  // 防止 dispatch 被调用多次
        // 派发事件
        const fetchData = async () => {
            await dispatch(fetchHighPriceGoodsInfoDataAction()).then(res => {
                console.log(res.payload);
                setIsLoading(false);
            }, err => {
                console.log(err);
            })
        }
        fetchData()
    }, [dispatch]);

    if (isLoading || !HighPriceGoodsInfo || !HighPriceGoodsInfo.goodsList) {
        return <LazyPage />
    }
    // 从 redux 中获取数据
    // console.log(HighPriceGoodsInfo.id)

    return (
        <>
            <HomeWrapper>
                <HomeBanner />
                <div className="homeContent">
                    <div className="goodPrice">
                        <HomeSectionHeader
                            title={HighPriceGoodsInfo?.title}
                            desc={HighPriceGoodsInfo?.desc}
                        />
                        <div className="home-content-highPrice">
                            {
                                HighPriceGoodsInfo?.goodsList?.slice(0, 8).map((item) => {
                                    return (
                                        <SectionItem
                                            item={item}
                                            key={item?.id}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </HomeWrapper>
        </>
    )
})

export default Home