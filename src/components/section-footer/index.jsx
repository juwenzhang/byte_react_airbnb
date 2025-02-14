import { memo } from "react";
import {RightOutlined} from "@ant-design/icons";

import SectionFooterWrapper from "./style/style";
import PropTypes from "prop-types";

const SectionFooter = memo((props) => {
    const {
        content,
        SectionFooterClick
    } = props;

    function SectionFooterClickHandle() {
        SectionFooterClick()
    }

    return (
        <SectionFooterWrapper>
            <div
                className="section-footer"
                onClick={() => SectionFooterClickHandle()}
            >
                <div className="section-footer-content">
                    查看{content}全部
                </div>
                <div className="section-footer-rightArrow">
                    <RightOutlined/>
                </div>
            </div>
        </SectionFooterWrapper>
    )
})

SectionFooter.propTypes = {
    content: PropTypes.string.isRequired,
    SectionFooterClick: PropTypes.func.isRequired
}

export default SectionFooter