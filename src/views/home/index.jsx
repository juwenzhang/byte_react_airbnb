import {memo} from "react";
import HomeWrapper from "./style";
import HomeBanner from "./childrenComponet/Home-Banner/HomeBanner";
import HomeSectionOne from "./childrenComponet/home-section-one";
import HomeSectionTwo from "./childrenComponet/home-section-two";
import HomeSectionThree from "./childrenComponet/home-section-three";

const Home = memo(() => {
    return (
        <>
            <HomeWrapper>
                <HomeBanner />
                <div className="homeContent">
                    <HomeSectionOne/>
                    <HomeSectionTwo/>
                    <HomeSectionThree/>
                </div>
            </HomeWrapper>
        </>
    )
})

export default Home