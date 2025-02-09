// 开始实现定义我们的数据 faker 生成模板
import { faker } from "@faker-js/faker"

faker.locale = "zh-CN"

function createImageList(count = 5) {
    return faker.helpers.multiple(() => ({
        id: faker.string.uuid().replaceAll("-", ""),
        imageUrl: faker.image.url({
            width: 250,
            height: 300,
        })
    }), {
        count
    })
}

function createGoodsList(count,
                         titleLength = { min: 10, max: 15 }) {
    return faker.helpers.multiple(()=> ({
            id: faker.string.uuid().replaceAll("-", ""),
            title: faker.string.alpha({
                length: titleLength,
            }),
            desc: faker.lorem.paragraph(),
            category: faker.commerce.department(),
            stock: faker.number.int({ min: 1, max: 100 }),
            price: faker.commerce.price(),
            imageList: createImageList(),
            rate: faker.number.int({min: 0, max: 5}),
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
        desc: faker.lorem.paragraph(),
        goodsList: createGoodsList(count),
    }
}

export default createHomeDataTemplate