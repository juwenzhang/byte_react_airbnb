import { Rate } from "antd";
import { memo, useState } from "react";
import AntJzhRateWrapper from "./style"
import PropTypes from "prop-types";

const AntJzhRate = memo((props) => {
    const {
        allowHalf,
        ThemeColor,
        rate,
        starNum
    } = props

    const [antRate, setAntRate] = useState(rate)

    return (
        <>
            <AntJzhRateWrapper
                $ThemeColor={ ThemeColor || "yellow" }
            >
                <Rate
                    allowHalf={allowHalf || true}
                    onChange={(num) => setAntRate(num)}
                    value = {
                        antRate !== null
                            ? antRate
                            : 0
                    }
                    star={starNum || 10}
                    rootClassName="ant-jzh-rate"
                />
                {
                    antRate !== null
                        ? <span>{ antRate * 2 }</span>
                        : <span>{ 0 }</span>
                }
            </AntJzhRateWrapper>
        </>
    )
})

AntJzhRate.prototype = {
    allowHalf: PropTypes.bool,
    ThemeColor: PropTypes.string,
    rate: PropTypes.number.isRequired,
    starNum: PropTypes.number,
}

export default AntJzhRate