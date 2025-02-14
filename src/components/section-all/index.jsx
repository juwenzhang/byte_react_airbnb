import {memo, useCallback, useMemo, useState} from "react";
import PropTypes from "prop-types";
import {faker} from "@faker-js/faker";
import {useNavigate} from "react-router-dom";

import SectionList from "../section-list";
import SectionHeader from "../section-header";
import SectionAllWrapper from "./style/style"
import SectionCards from "../section-cards";
import SectionFooter from "../section-footer";

const SectionAll = memo((props) => {
    const {
        data = {},
        elementNum = 8,
        showRows = 2
    } = props

    const {
        title,
        desc,
        goodsList
    } = data

    // react-hooks/exhaustive-deps
    // 使用 useMemo 缓存 cards 数组
    const cards = useMemo(() => {
        const uniqueAddresses = new Set(goodsList.map(item => item.address));
        return [
            {
                card: "all",
                id: faker.string.uuid(),
            },
            ...Array.from(uniqueAddresses).map(address => ({
                card: address,
                id: faker.string.uuid(),
            }))
        ];
    }, [goodsList]);

    const [currentCardName, setCurrentCardName] = useState(cards[0].card === "all" && "" );
    const [dataListState, setDataListState] = useState(goodsList)
    // useCallBack 实现解决每次重新加载组件的时候都会创建这个函数实例出来的问题，这个也是性能优化的一点吧
    const cardClickHandle = useCallback((cardName) => {
        setCurrentCardName(cards[0].card === "all" && "")
        const newDataState = dataListState.filter(
            (item) => {
                if (cardName === cards[0].card) {
                    return true
                } else {
                    return item.address === cardName
                }
            }
        )
        setDataListState(newDataState)
        // eslint-disable-next-line
    }, [cards])

    const navigate = useNavigate();
    const SectionFooterClick = useCallback(() => {
        navigate("/entire", {
            state: {
                "filterCards": cards,
                "goodList": goodsList
            }
        });
    }, [navigate, cards, goodsList]);


    return (
        <SectionAllWrapper>
            <SectionHeader
                title={title}
                desc={desc}
            />
            <SectionCards
                cards={cards}
                cardClickHandle={cardClickHandle}
            />
            <SectionList
                goodsList={dataListState}
                elementNum={elementNum}
                showRows={showRows}
            />
            <SectionFooter
                content={currentCardName}
                SectionFooterClick={SectionFooterClick}
            />
        </SectionAllWrapper>
    )
})

SectionAll.prototype = {
    data: PropTypes.object.isRequired,
    elementNum: PropTypes.number,
    showRows: PropTypes.number
}

export default SectionAll