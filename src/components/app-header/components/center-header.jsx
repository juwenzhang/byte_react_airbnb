import { memo } from "react"
import { CenterHeaderWrapper } from "../style/centerHeader"
import {SearchOutlined} from "@ant-design/icons";

const CenterHeader = memo(() => {
    return (
        <>
            <CenterHeaderWrapper>
                <div className="text">juwenzhang</div>
                <div className="icon">
                    <SearchOutlined />
                </div>
            </CenterHeaderWrapper>
        </>
    )
})

export default CenterHeader