import styled from "styled-components";

const BackgroundImage = new URL("../../../../assets/images/HomeBanner.png", import.meta.url).href
// 使用 require 将图片导入也是可以的呐

const HomeBannerWrapper = styled.div`
    width: 100%;
    height: 530px;
    background: #938f8f url(${BackgroundImage}) no-repeat center/cover;

    @media (max-width: 768px) {
        height: 300px; // 移动端高度调整为 300px
        background: #938f8f url(${BackgroundImage}) no-repeat center/cover;
    }
`

export default HomeBannerWrapper;