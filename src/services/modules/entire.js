import JWZRequest from "../config";

export function getEntireData(page = 0, pageSize = 20) {
    return JWZRequest.get({
        url: '/entire/list',
        params: {
            page,
            pageSize
        }
    })
}