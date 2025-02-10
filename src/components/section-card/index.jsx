import {memo} from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';

import SectionCardWrapper from './style/style';

const SectionCard = memo((props) => {
    const {
        card = "",
        isActive
    } = props

    return (
        <SectionCardWrapper>
            <div
                className={classNames("card", {active: isActive})}
            >
                {card}
            </div>
        </SectionCardWrapper>
    )
})

SectionCard.prototype = {
    card: PropTypes.string.isRequired,
    isActive: PropTypes.bool
}

export default SectionCard