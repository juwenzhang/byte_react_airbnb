import { memo } from "react"
import {useNavigate} from "react-router-dom";

import { LeftHeaderWrapper } from "../style/leftHeader"


const LeftHeader = memo(() => {
    const imageUrl = new URL("../../../assets/logo/logo192.png", import.meta.url).href

    const navigate = useNavigate()
    const logoClickHandle = () => {
        navigate("/home")
    }

    return (
        <>
            <LeftHeaderWrapper>
                <div
                    className="imgContainer"
                    onClick={
                        () => logoClickHandle()
                    }
                >
                    <img src={imageUrl} alt=""/>
                </div>
            </LeftHeaderWrapper>
        </>
    )
})

export default LeftHeader