import React from "react";
import SectionLongForItemWrapper from "./style/style";

const SectionLongForItem = ({ goodsItem, address, category }) => {
    const imageUrl = goodsItem?.imageList?.[0]?.imageUrl || "/path/to/default/image.jpg";

    return (
        <SectionLongForItemWrapper>
            <div className="long-for-inner">
                <img
                    className="long-for-cover"
                    src={imageUrl}
                    alt="图片正在加载中..."
                />
                <div className="long-for-bg-cover"></div>
                <div className="long-for-content">
                    <div className="long-for-city">
                        {address || "默认地址"}
                    </div>
                    <div className="long-for-category">
                        {category || "默认分类"}
                    </div>
                </div>
            </div>
        </SectionLongForItemWrapper>
    );
};

export default SectionLongForItem;