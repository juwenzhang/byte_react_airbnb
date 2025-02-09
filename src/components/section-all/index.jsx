import { memo } from "react";
import PropTypes from "prop-types";

import SectionList from "../section-list";
import HomeSectionHeader from "../home-section-header";
import SectionAllWrapper from "./style/style"

const SectionAll = memo((props) => {
    const {
        data = {},
        elementNum = 8,
        showRows = 2
    } = props

    return (
        <SectionAllWrapper>
            <HomeSectionHeader
                title={data?.title}
                desc={data.desc}
            />
            <SectionList
                goodsList={data?.goodsList}
                elementNum={elementNum}
                showRows={showRows}
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