import {memo, useEffect} from "react"
import PropTypes from "prop-types";

import DetailPictureWrapper from "./style/style";

const DetailPicture = memo((props) => {
    const {
        data
    } = props

    const [data_left] = data.slice(0, 1)
    const data_right = data.slice(1, data.length)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <DetailPictureWrapper>
            <div className="detail-picture">

                <div className="detail-picture-left">
                    <div className="detail-picture-item">
                        <img src={data_left?.imageUrl} alt="图片正在加载中...."/>
                    </div>
                    <div className="detail-picture-cover"></div>
                </div>

                <div className="detail-picture-right">
                    {
                        data_right.map((item) => {
                            return (
                                <div
                                    className="detail-picture-item"
                                    key={item?.id}
                                >
                                    <img
                                        src={item?.imageUrl}
                                        alt=""
                                    />
                                    <div className="detail-picture-cover"></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div
                className="detail-show-btn"
            >
                <button>查看图片</button>
            </div>
        </DetailPictureWrapper>
    )
})

DetailPicture.prototype = {
    data: PropTypes.array.isRequired
}

export default DetailPicture