const Mock = require('mockjs');

Mock.mock('/', {
    data: [],
    msg: "hello mock",
    "code|1-4": 1,
})

Mock.mock('/test', 'POST', {
    data: [],
    msg: "hello mock",
    "code|1-4": 1,
})

Mock.mock('/test', {
    type: 'jsonp',
    param: 'callbackName'
},{
    code: 0,
    msg: 'hello from mock jsonp',
    data: {
        "id|1000-9999": 1,
    }
})

Mock.mock("/test2", "jsonp", {
    code: 0,
    msg: "hello from mock jsonp2",
    data: {
        "id|1000-9999": 1,
    }
});