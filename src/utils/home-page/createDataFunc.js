import createHomeDataTemplate from "./home-data-template";

export function createDataFunc(count) {
    const data = createHomeDataTemplate(count)
    data.goodsList.map((item, index) => ({
        ...item,
        publishDate: item.publishDate.toISOString,
    }))
    return data
}