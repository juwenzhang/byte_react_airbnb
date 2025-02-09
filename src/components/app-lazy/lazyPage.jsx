import { memo } from "react"
import {LazyStyle} from "./index";

export const LazyPage = memo(() => {
    return (
        <>
            <LazyStyle>
                <div className="lazyBack">
                    <div className="context">Page Is Loading...</div>
                </div>
            </LazyStyle>
        </>
    )
})