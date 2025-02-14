import {memo, useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import EntireFilterWrapper from "./style/style";

const EntireFilter = memo((props) => {
    const {
        filterCards
    } = props

    const [selectCardNames, setSelectCardNames] = useState([])

    const EntireFilterCardClickHandle = (cardName) => {
        const newItems = [...selectCardNames]
        if (newItems.includes(cardName)) {
            // 移除元素的通用操作
            const index = newItems.indexOf(cardName)
            newItems.splice(index, 1)
        } else {
            newItems.push(cardName)
        }
        setSelectCardNames(newItems)
    }

    return (
        <EntireFilterWrapper>
            <div className="entire-filter">
                {
                    filterCards.slice(0, 8).map((card, index) => {
                        return (
                            <div
                                key={card?.id}
                                className={
                                    classNames(
                                        "entire-filter-card",
                                        {
                                            "active": selectCardNames.includes(card?.card)
                                        }
                                    )}
                                onClick={
                                    () => EntireFilterCardClickHandle(card?.card)
                                }
                            >
                                {
                                    card.card
                                }
                            </div>
                        )
                    })
                }
            </div>
        </EntireFilterWrapper>
    )
})

EntireFilter.prototype = {
    filterCards: PropTypes.array
}

export default EntireFilter