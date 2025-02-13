import { memo } from "react"
import {LazyStyle} from "./index";
import {LoadingOutlined} from "@ant-design/icons";

export const LazyPage = memo(() => {
    return (
        <>
            <LazyStyle>
                <div className="lazyBack">
                    <div className="context">Page Is Loading...<LoadingOutlined /></div>
                </div>
            </LazyStyle>
        </>
    )
})