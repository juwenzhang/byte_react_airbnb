import { memo } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

import DetailWrapper from "./style";
import DetailPicture from "./childrenComponet/detail-picture";
import DetailInfos from "./childrenComponet/detail-infos";

const selectDetailInfo = createSelector(
    (state) => state.detail.detailInfo,
    (detailInfo) => ({ detailInfo }) // 返回一个新的对象
);

const Detail = memo(() => {
    const { detailInfo } = useSelector(selectDetailInfo);

    return (
        <DetailWrapper>
            <DetailPicture
                data={detailInfo}
            />
            <DetailInfos />
        </DetailWrapper>
    );
});

export default Detail;
