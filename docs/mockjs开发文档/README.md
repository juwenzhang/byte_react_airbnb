## MockJs 开发文档

### 为什么出现 MockJs 技术呐???
* 随着开发的逐渐发展，我们的前后端开发也实现了分离
* 但是作为前端而言的话，主要的任务就是进行展示数据的
  * 但是大部分前端的话是无法从数据库中获取数据，
  * 为了获取需要呈现在页面的数据，就只有等待后端 API 开发好后才可以进行下一步的开发
  * 但是这样的开发进度是十分不友好的，因为这样会导致前端工作的滞后
  * 所以说 MockJs 就出现了，就从一定的程度上解决了前端工作滞后的情况出现了
* 什么是前后端网络请求交互呐???
  * 基本的流程的话是
    * 前端通过调用后端 API 接口
    * 后端接收前端（客户端）的网络请求，向数据库中查询数据
    * 后端将数据返回给我们的前端
    * 前端获取得到数据后，将数据展示到页面中，供用户之间进行页面交互吧
  * 前端（客户端）向后端索取数据的过程，就是我们的请求 request 过程
  * 后端向前端（客户端）返回数据的过程，就是我们的响应 response 过程
  * 在我们的前后端分离的开发模式中，前后端的数据传输主要是以 JSON 数据的形式进行传输的
* MockJS 网站
  * Github地址: https://github.com/nuysoft/Mock
  * 官网地址: http://mockjs.com/

---
### 安装 MockJS
* MockJs 是一种偏重于解决前后端网络请求交互的自动生成数据给前端页面使用的工具
  * 安装 MockJS: `npm install mockjs` 或者 `npm i mockjs`
  * 首先我们的案例统一在 index.jsx 文件中执行
    * `node index.jsx`
    * `nodemon index.jsx`
  * node 和 nodemon 启动服务的区别
    * node 的话如果我们的文件内容被修改了，我们需要的是进行重新手动的启动运行js文件
    * nodemon 的话实现的就是内容被修改了，自动的检测修改了的内容，自动化的重新运行js文件

---
### MockJS 使用前沿
* 只要在我们的JS文件中导入了 mockjs ，那么就全局提供了一个 mock 对象
* 在该 mock 对象下面有一个 mock 函数来帮助我们的生成随机的模拟数据了
```javascript
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
      "id|+1": 0
    }
  ]
})

console.log(mockData)
```

### MockJs 生成数据模板
* 数据模板定义规范
  * "键值|生成数据规则": JavaScript可以支持的数据类型
  * 主要的话就是了解生成数据规则，知道了规则如何就可以天马行空的发挥了
* 字符串和数值生成规则共有**七**种
  * min-max: 生成min-max之间的随机字符串 --> "list|1-10"
  * count: 指定固定个数生成的数据 --> "list|5"
  * min-max.dmin-dmax: 生成min-max之间的浮点数，小数部分保留随机 dmin-dmax 位 --> "list|1-10.1-5"
  * count.dcount: 生成count个浮点数，保留dcount位 --> "list|5.5"
  * +step 就是自增步长
* http://mockjs.com/examples.html 实例还是十分清晰的

### 官方文档随机数据生成类型
* 数据模板定义
* 数据占位符定义
  * Basic 就是一些简单的数据类型
  * Date 就是随机的时间数据
  * Image 就是一些随机的图片资源数据
  * Color 随机颜色
  * Text 随机文本
  * Name 随机名称
  * Web web开发中的一些数据
  * Address 地址信息
  * Helper 一些帮助处理器
  * Miscellaneous uuid生成器

### 搭建 MockJs 服务器
* 全局安装 mock-server 服务包
  * `npm install @shymean/mock-server -g`  类似于我们的 json-server
* 通过 mock 命令启动我们的 mock 服务器 js 文件
* 通过浏览器或者 postman 等工具访问该服务器，获取 json 数据
* 拓展
  * json-server 的使用
    * json-server 是我们的一个通过自己手写数据，实现模拟网络请求的工具
      * `npm install json-server`
    * 实现步骤就是在我们的目录中书写一个一个的 json 文件: db.json
      * 启动服务:
        * `npx json-server db.json` 或者 `json-server db.json`
        * `json-server --help` 查看帮助
  * mock-server 的使用
    * `npm install @shymean/mock-server -g`
    * `mock -p 9999 -f ./fileName.js`