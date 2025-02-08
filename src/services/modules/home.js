import JWZRequest from "../index";

export const getHomeGoodPriceData = () => {
    return JWZRequest.get({
        url: "/home/goodprice"
    })
}