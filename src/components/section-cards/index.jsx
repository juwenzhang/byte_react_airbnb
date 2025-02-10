import { memo, useState } from "react";
import PropTypes from "prop-types";

import SectionCardsWrapper from "./style/style";
import SectionCard from "../section-card";
// import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const SectionCards = memo((props) => {
    const {
        cards = [],
        cardClickHandle
    } = props;

    const [isActive, setIsActive] = useState(0);

    function cardOnclick(index) {
        setIsActive(index);
        cardClickHandle(cards[index]?.card);
    }

    return (
        <SectionCardsWrapper>
            {
                cards.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={(e) => cardOnclick(index)}
                    >
                        <SectionCard
                            card={item?.card}
                            isActive={isActive === index}
                        />
                    </div>
                ))
            }
        </SectionCardsWrapper>
    );
});

SectionCards.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number]
            ).isRequired,
            card: PropTypes.object.isRequired
        })
    ).isRequired,
    cardClickHandle: PropTypes.func.isRequired
};

export default SectionCards;