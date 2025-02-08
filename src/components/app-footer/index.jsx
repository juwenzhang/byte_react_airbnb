import { memo } from "react"
import {createTemplate} from "../../utils/app-page/app-footer-data-template";
import {AppFooterWrapper, FooterFooterWrapper} from "./style";

const AppFooter = memo(() => {
    const data = createTemplate()
    const footer = (
        <>
            {
                data.map((item, index) => (
                    <div className="footer-item" key={item.id}>
                        <div className="footer-item-title">{ item.name }</div>
                        <div className="footer-item-content">
                            {
                                item.list.map((link, index) => (
                                    <div key={link.id}>
                                        <a href={link.url} target="_blank">{ link.title }</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
    return (
        <>
            <AppFooterWrapper>
                {footer}
            </AppFooterWrapper>
            <FooterFooterWrapper>
                @ 2025 BateDance/JUWENZHANG, Inc ALL Rights.
            </FooterFooterWrapper>
        </>
    )
})

export default AppFooter