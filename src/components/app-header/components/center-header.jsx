import { memo } from "react"
import { CenterHeaderWrapper } from "../style/centerHeader"

const CenterHeader = memo(() => {
    return (
        <>
            <CenterHeaderWrapper>
                <div className="text">juwenzhang</div>
                <div className="icon"></div>
            </CenterHeaderWrapper>
        </>
    )
})

export default CenterHeader