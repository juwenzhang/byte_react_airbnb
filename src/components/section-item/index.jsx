import {Fragment, memo, useCallback} from "react";
import PropTypes from "prop-types";
import {SectionItemWrapper} from "./style/style";
import AntJzhRate from "../../base-ui/ant-jzh-rate";
import {Carousel} from "antd";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeDetailInfoAction} from "../../store/modules/detail";

const SectionItem = memo((props) => {
    const {
        item,
        avg
    } = props

    const navigate = useNavigate()
    const dispatch = useDispatch()
    // eslint-disable-next-line
    const ToDetailHandle = useCallback((data) => {
        dispatch(changeDetailInfoAction(data))
        navigate("/detail")
        // eslint-disable-next-line
    }, [item])

    return (
        <Fragment>
            <SectionItemWrapper
                $ItemTextTitleColor={item?.title?.color || "#46413e" }
                $ItemTextDetailColor={item?.detail?.color || "#675e4e" }
                $ItemTextPriceColor={item?.price?.color || "#be5555" }
                $avg={avg}
            >
                <div className="section-item-inner">
                    <Carousel
                        autoplay
                        arrows
                    >
                        {
                            item?.imageList.map(imgEl => {
                                return (
                                    <div
                                        className="section-item-cover"
                                        key={imgEl.id}
                                        onClick={() => ToDetailHandle(item?.imageList)}
                                    >
                                        <img
                                            src={imgEl?.imageUrl}
                                            alt="图片正在加载..."
                                        />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <div className="section-item-title">
                    {item.title}
                    </div>
                    <div className="section-item-detail">
                        {item.desc.slice(0, 20)}...
                    </div>
                    <div className="section-item-price">
                        ${item.price}/day
                    </div>
                    <div className="section-item-rate">
                        <AntJzhRate
                            allowHalf={true}
                            ThemeColor={"orange"}
                            rate={item.rate}
                            starNum={10}
                        />
                    </div>
                </div>
            </SectionItemWrapper>
        </Fragment>
    )
})

SectionItem.propTypes = {
    item: PropTypes.object,
    avg: PropTypes.string
}

export default SectionItem