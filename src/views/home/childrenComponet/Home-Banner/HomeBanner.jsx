import {memo} from "react";
import HomeBannerWrapper from "./style";

const HomeBanner = memo(() => {
    return (
        <>
            <HomeBannerWrapper>
                HomeBanner Page Component
            </HomeBannerWrapper>
        </>
    )
})

export default HomeBanner;