import { memo } from "react";
import PropTypes from "prop-types"

import { HomeSectionHeaderWrapper } from "./style/style"

const HomeSectionHeader = memo((props) => {
    const { title = "home section title", desc } = props
    return (
        <>
            <HomeSectionHeaderWrapper>
                <div className="title">{title}</div>
                { desc && <div className="desc">{ desc }</div> }
            </HomeSectionHeaderWrapper>
        </>
    )
})

HomeSectionHeader.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
}

export default HomeSectionHeader