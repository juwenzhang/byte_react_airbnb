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
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            { link.title }
                                        </a>
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
                MIT License

                Copyright (c) 2025 ZhiHong Ju

                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:

                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.

                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
            </FooterFooterWrapper>
        </>
    )
})

export default AppFooter