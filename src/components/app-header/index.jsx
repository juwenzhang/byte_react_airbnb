import {Fragment, memo} from "react"
import { HeaderWrapper } from "./style/index"
import LeftHeader from "./components/left-header";
import CenterHeader from "./components/center-header"
import RightHeader from "./components/right-header"

const AppHeader = memo(() => {
    return (
        <Fragment>
            <HeaderWrapper>
                <LeftHeader />
                <CenterHeader />
                <RightHeader />
            </HeaderWrapper>
        </Fragment>
    )
})

export default AppHeader