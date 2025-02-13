import {memo, useEffect, useRef, useState} from 'react'

import JzhScrollViewWrapper from "./style/style";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const JzhScrollView = memo((props) => {
    const {
        children
    } = props;

    const [
        showRightBottom,
        setShowRightBottom
    ] = useState(false);  // 记录右边按钮是否显示
    const [
        showLeftBottom,
        setShowLeftBottom
    ] = useState(false);  // 记录左边按钮是否显示
    const [
        positionIndex,
        setPositionIndex
    ] = useState(0);  // 记录点击按钮后具体需要移动元素的下标值

    // 等待组件渲染完毕后判断组件是否进行渲染
    // useEffect 是等待组件被渲染完毕后才回调的
    // 同时依赖于我们的 children 的变化来决定内容是否显示
    const jzhScrollSlotContentRef = useRef(null);
    const jzhDistanceRef = useRef(null)
    useEffect(() => {
        const jzhScrollWidth = jzhScrollSlotContentRef.current.scrollWidth  // 获取可以滚动的宽度
        const jzhClientWidth = jzhScrollSlotContentRef.current.clientWidth  // 元素本身占据的宽度
        const jzhScrollLeft = jzhScrollSlotContentRef.current.scrollLeft;
        const jzhDistance = jzhScrollWidth - jzhClientWidth

        jzhDistanceRef.current = jzhDistance
        setShowRightBottom(jzhDistance > 0)
        setShowLeftBottom(jzhScrollLeft > 0);
    }, [children]);


    // 下面的代码是可以抽离的，就是我们的下面的两个函数代码逻辑十分的重复
    // 可以使用散列表的思想来封装
    // 最终的监听移动函数
    const controlMoveEle = (e, isToRight = true) => {
        e.preventDefault()
        const newIndex = isToRight ? positionIndex + 1 : positionIndex - 1;
        const newCard = jzhScrollSlotContentRef.current.children[newIndex]
        if (newCard) {
            const newOffsetLeft = newCard.offsetLeft
            jzhScrollSlotContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
            setPositionIndex(newIndex);
            setShowLeftBottom(newOffsetLeft > 0)
            setShowRightBottom(jzhDistanceRef.current > newOffsetLeft)
        }
    }

    return (
        <JzhScrollViewWrapper>
            {
                showLeftBottom &&
                <div
                    className="jzh-scroll-left-button"
                    onMouseDown={e => controlMoveEle(e, false)}
                >
                    <LeftOutlined />
                </div>
            }
            <div className="jzh-scroll-slot">
                <div
                    className="jzh-scroll-slot-content"
                    ref={jzhScrollSlotContentRef}
                >
                    {
                        children
                    }
                </div>
            </div>
            {
                showRightBottom &&
                <div
                    className="jzh-scroll-right-button"
                    onMouseDown={e => controlMoveEle(e, true)}
                >
                    <RightOutlined/>
                </div>
            }
        </JzhScrollViewWrapper>
    )
})

JzhScrollView.propTypes = {
    children: PropTypes.node.isRequired,
}

export default JzhScrollView