import { memo } from "react";
import PropTypes from "prop-types";
import SectionItem from "../section-item";
import SectionListWrapper from "./style/style";


const SectionList = memo((props) => {
    const {
        goodsList = [],
        elementNum = 9,
        showRows = 3
    } = props

    const avg = `${(1 / (elementNum / showRows) * 100).toFixed(2)}%`

    return (
        <SectionListWrapper>
            {
                goodsList?.slice(0, elementNum).map((item) => {
                    return (
                        <SectionItem
                            item={item}
                            key={item?.id}
                            avg={avg}
                        />
                    )
                })
            }
        </SectionListWrapper>
    )
})

SectionItem.propTypes = {
    goodsList: PropTypes.array.isRequired,
    elementNum: PropTypes.number,
    showRows: PropTypes.number
}

export default SectionList