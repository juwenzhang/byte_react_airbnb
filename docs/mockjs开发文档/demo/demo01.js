const Mock = require('mockjs')

// console.log(Mock)

const mockData = Mock.mock({
    // 生成的元素的话有 5-10 个元素
    // 随机生成我们 5-10 个元素
    // 内部每个元素是对象，对象中含有键 id
    // id 的值是自增的
    // | 就是我们的 key 后面需要使用的操作符了
    "list|5-10": [
        {
            "id|+1": 0,
            "avg|1-10.1-5": 1
        }
    ]
})

console.log(mockData)