import { memo } from "react";
import PropTypes from "prop-types"

import { SectionHeaderWrapper } from "./style/style"

const SectionHeader = memo((props) => {
    const { title = "home section title", desc } = props
    return (
        <>
            <SectionHeaderWrapper>
                <div className="title">{title}</div>
                { desc && <div className="desc">{ desc }</div> }
            </SectionHeaderWrapper>
        </>
    )
})

SectionHeaderWrapper.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default SectionHeaderWrapper