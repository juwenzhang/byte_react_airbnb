import {faker} from "@faker-js/faker";

function createListData(count) {
    return faker.helpers.multiple(() => ({
        id: faker.string.uuid(),
        url: faker.internet.url(),
        title: faker.string.nanoid({
            min: 3,
            max: 8
        }),
    }), {
        count
    })
}

export function createTemplate(count = 4) {
    return faker.helpers.multiple(() => ({
        name: faker.lorem.sentence({
            min: 1,
            max: 1,
        }),
        list: createListData(4),
        id: faker.string.uuid()
    }), {
        count
    })
}