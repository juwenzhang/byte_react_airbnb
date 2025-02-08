// 开始实现定义我们的数据 faker 生成模板
import { faker } from "@faker-js/faker"

function createImageList(count = 5) {
    return faker.helpers.multiple(() => ({
        id: faker.string.uuid().replaceAll("-", ""),
        imageUrl: faker.image.url()
    }), {
        count
    })
}

function createGoodsList(count,
                         titleLength = { min: 10, max: 15 },
                         descLength = { min: 20, max: 30 }) {
    return faker.helpers.multiple(()=> ({
            id: faker.string.uuid().replaceAll("-", ""),
            title: faker.string.alpha({
                length: titleLength,
            }),
            desc: faker.string.alpha({
                length: descLength
            }),
            category: faker.commerce.department(),
            stock: faker.number.int({ min: 1, max: 100 }),
            price: faker.commerce.price(),
            imageList: createImageList(),
            publishDate: faker.date.recent().toISOString(),
    }), {
        count
    })
}

function createHomeDataTemplate(count,
                                titleLength = { min: 5, max: 10 }) {
    return {
        id: faker.string.uuid().replaceAll("-", ""),
        title: faker.string.alpha({
            length: titleLength
        }),
        goodsList: createGoodsList(count),
    }
}

export default createHomeDataTemplate