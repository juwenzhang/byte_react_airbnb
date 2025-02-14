import {memo, useEffect, useState} from "react"
import { RightHeaderWrapper } from "../style/rightHeader"
import {GithubOutlined, GlobalOutlined, UnorderedListOutlined} from "@ant-design/icons";

const RightHeader = memo(() => {
    const [panelIsShow, setPanelIsShow] = useState(false)

    // 开始使用副作用代码，监听页面的点击
    useEffect(() => {
        function WindowClickHandle() {
            setPanelIsShow(false)
        }
        window.addEventListener("click", WindowClickHandle, true)
        return () => {
            window.removeEventListener("click", WindowClickHandle, true)
        }
    }, []);

    function profileClickHandle(e) {
        e.stopPropagation()
        setPanelIsShow(!panelIsShow)
    }


    const panel = (
        <div className="panel">
            <div className="top">
                <div className="item register">注册</div>
                <div className="item login">登录</div>
            </div>
            <div className="bottom">
                <div className="item send">个人</div>
                <div className="item exp">体验</div>
                <div className="item layout">签出</div>
            </div>
        </div>
    )
    return (
        <>
            <RightHeaderWrapper>
                <div className="buttons">
                    <span>登录</span>
                    <span>注册</span>
                    <GlobalOutlined />
                </div>
                <div className="profile"
                    // onMouseOver={() => setPanelIsShow(true)}
                    // onMouseOut={() => setPanelIsShow(false)}
                     onClick={(e) => profileClickHandle(e)}
                >
                    <div className="mark"></div>
                    <div className="app-header-content">
                        <div className="app-header-list"><UnorderedListOutlined/></div>
                        <div className="app-header-icon"><GithubOutlined/></div>
                    </div>
                    {/* 开始实现我们的面板 */}
                    {/*{ panelIsShow ? panel : null }*/}
                    {panelIsShow && panel}
                </div>
            </RightHeaderWrapper>
        </>
    )
})

export default RightHeader