import { memo } from "react"
import { LeftHeaderWrapper } from "../style/leftHeader"

const LeftHeader = memo(() => {
    const imageUrl = new URL("../../../assets/logo/logo192.png", import.meta.url).href

    return (
        <>
            <LeftHeaderWrapper>
                <div className="imgContainer">
                    <img src={imageUrl} alt=""/>
                </div>
            </LeftHeaderWrapper>
        </>
    )
})

export default LeftHeader