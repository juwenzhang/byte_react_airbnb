import {Fragment, memo} from "react";
import HomeWrapper from "./style";
import HomeBanner from "./childrenComponet/Home-Banner/HomeBanner";
import HomeSectionOne from "./childrenComponet/home-section-one";
import HomeSectionTwo from "./childrenComponet/home-section-two";
import HomeSectionThree from "./childrenComponet/home-section-three";
import HomeSectionLongFor from "./childrenComponet/home-section-long-for";

const Home = memo(() => {
    return (
        <Fragment>
            <HomeWrapper>
                <HomeBanner />
                <div className="homeContent">
                    <HomeSectionOne/>
                    <HomeSectionTwo/>
                    <HomeSectionThree/>
                    <HomeSectionLongFor/>
                </div>
            </HomeWrapper>
        </Fragment>
    )
})

export default Home