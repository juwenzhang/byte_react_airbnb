import { memo } from "react";
import PropTypes from "prop-types";

import SectionList from "../section-list";
import HomeSectionHeader from "../home-section-header";
import SectionAllWrapper from "./style/style"

const SectionAll = memo((props) => {
    const {
        data = {}
    } = props

    return (
        <SectionAllWrapper>
            <HomeSectionHeader
                title={data?.title}
                desc={data.desc}
            />
            <SectionList
                goodsList={data?.goodsList}
            />
        </SectionAllWrapper>
    )
})

SectionAll.prototype = {
    data: PropTypes.object.isRequired
}

export default SectionAll