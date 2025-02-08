import { memo } from "react";
import PropTypes from "prop-types";
import {SectionItemWrapper} from "./style/style";

const SectionItem = memo((props) => {
    const { item } = props
    return (
        <>
            <SectionItemWrapper
                $ItemTextTitleColor={item?.title?.color || "#46413e" }
                $ItemTextDetailColor={item?.detail?.color || "#675e4e" }
                $ItemTextPriceColor={item?.price?.color || "#be5555" }
            >
                <div className="section-item-inner">
                    <div className="section-item-cover">
                        <a
                            href={item?.imageList[0]?.imageUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={item?.imageList[0]?.imageUrl}
                                alt="图片正在加载..."
                            />
                        </a>
                    </div>
                    <div className="section-item-title">
                        {item.title}
                    </div>
                    <div className="section-item-detail">
                        {item.desc.slice(0, 20)}...
                    </div>
                    <div className="section-item-price">
                        ${item.price}/day
                    </div>
                </div>
            </SectionItemWrapper>
        </>
    )
})

SectionItem.propTypes = {
    item: PropTypes.object,
}

export default SectionItem