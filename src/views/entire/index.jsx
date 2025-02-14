import {memo, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";

import EntireWrapper from "./style";
import EntireFilter from "./childrenComponet/entire-filter";
import EntireList from "./childrenComponet/entire-list";
import EntirePagination from "./childrenComponet/entire-pagination";
import {fetchEntireList} from "../../store/modules/entire/createActions";

const Entire = memo(() => {
    const { state } = useLocation();
    const { filterCards, goodList } = state || {};

    const dispatch = useDispatch()

    const [filterCardsState, setFilterCardsState] = useState([])
    const [goodListState, setGoodListState] = useState([])

    // 如果直接打印的话会出现数据为空的，所以说我们需要使用 useEffect
    useEffect(() => {
        setFilterCardsState(filterCards)
        setGoodListState(goodList)
        // 用于组件挂载前的数据初始化
    }, [
        filterCardsState,
        goodListState,
        filterCards,
        goodList
    ]);

    useEffect(() => {
        dispatch(fetchEntireList(goodList))
        // eslint-disable-next-line
    }, [dispatch, filterCards])

    return (
        <EntireWrapper>
            <EntireFilter
                filterCards={filterCardsState}
            />
            <EntireList/>
            <EntirePagination/>
        </EntireWrapper>
    )
})

export default Entire