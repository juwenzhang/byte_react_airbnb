import JWZRequest from "../index";

export const getHomeHighGoodPriceData = () => {
    return JWZRequest.get({
        url: "/home/HighGoodPrice"
    })
}

export const getHomeMiddlePriceData = () => {
    return JWZRequest.get({
        url: "/home/MiddleGoodPrice"
    })
}

export const getHomeLowerPriceData = () => {
    return JWZRequest.get({
        url: "/home/LowerGoodPrice"
    })
}