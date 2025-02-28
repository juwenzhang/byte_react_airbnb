## Byte_React_Airbnb 项目介绍

---
### 创建项目
* 主要使用的是 create-react-app 来进行的创建项目的
  * `npm install create-react-app -g`  进行全局安装依赖
  * `create-react-app byte_react_airbnb`

---
### 项目配置文件
* 配置项目的 icon --- 这个就是配置项目加载的网页图标的
* 配置项目标题 --- 这个就是用来实现的是配置项目的首次渲染标题的
* 配置项目的 jsconfig.json --- 为了让我们的开发更加的便捷，高效的
* 使用 craco 配置文件别名@ 和 less文件配置
  * `npm install @craco/craco craco-less --save-dev`
  * `craco.config.js`
    * 该文件是可以和我们的原本的 webpack 或者说 vite 的配置结合使用的
    * react 项目中如果想要看到 webpack 的配置，就需要执行一个不可逆的操作 `npm run eject`
    * 但是不推荐，所以说就使用我们的 craco 来实现间接性的修改 webpack 的配置的呐
    * 最后将我们的脚本文件启动方式换为 craco <-- react-scripts
  * `npm install --save-dev less-loader less`
* 注意，只要是修改了配置文件，项目就要重新运行一次，否则看不到效果的，呜呜呜，害惨我啦！！！

---
### 项目目录结构划分
* src/assets 存放静态资源目录
* src/base-ui 存放的是被多次使用的组件目录
* src/components 存放的是简单的组件目录
* src/hooks 自定义的一些 hooks 函数目录
* src/router 项目路由映射目录
* src/services 网络请求源码目录
* src/store 状态管理的数据目录
* src/utils 工具封装目录
* src/views 路由组件目录
* src/faker 模拟数据的函数

---
### CSS 样式重置
* 在我们的开发前我们需要的就是对我们的样式进行重置吧
* 不重置的话，后期开发中是会遇到很多的问题的
* 所以说我们就需要进行样式的重置
* 主要是使用我们的 normalize.css 文件的
  * `npm install normalize.css`
  * `import "normalize.css"`
* 同时自己如果需要其他的配置文件的话也是可以自定义配置样式的呐
  * `reset.css`

---
### router 配置
* `npm install react-router-dom`
  * 首先先在我们的 index.jsx 中开启 hash 或者 history 模式的路由
    * HashRouter 或者说 BrowserRouter 组件，将下面的组件进行包裹起来
  * 然后进行在我们的 router 目录中进行对应的路由配置吧
    * 再在需要进行使用的地方结合 useRoutes 使用即可
* 页面的懒加载 React.lazy 和 Suspense 结合使用，异步加载即可
```javascript
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"

import App from "./App";
import "normalize.css"
import "./assets/css/index.less"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="loading...">
        <HashRouter>
            <App/>
        </HashRouter>
    </Suspense>
  </React.StrictMode>
)
```
```javascript
import react from "react";
import { Navigate } from "react-router-dom";

// 实现页面的懒加载
const Home = react.lazy(() => import("../views/home"));
const Entire = react.lazy(() => import("../views/entire"))
const Detail = react.lazy(() => import("../views/detail"))

export const routes = [
    {
        // 配置重定向
        path: "/",
        element: <Navigate to="/home" replace/>,
    },

    {
        path: "/home",
        element: <Home/>,
    },

    {
        path: "/entire",
        element: <Entire/>,
    },

    {
        path: "./detail",
        element: <Detail/>,
    }
]
```
```javascript
import { useRoutes } from "react-router-dom";
import { routes } from "./router/index";
import { memo } from "react";

const App = memo(() => {
    return (
        <div className="App">
            <div className="header">header</div>
            <div className="content">
                { useRoutes(routes) }
            </div>
            <div className="footer">footer</div>
        </div>
    )
})
export default App;
```

---
### redux 状态管理配置
* `npm install @reduxjs/toolkit react-redux`
  * @reduxjs/toolkit 就是帮助我们实现的是 react 开发状态管理的时候类似于 pinia 的使用
  * react-redux 就是实现的是我们的将 react 组件和 redux 结合起来的第三方库吧
* 使用流程
  * 和我们的路由差不多
    * 都是先书写对应的配置部分
    * 然后实现对 src/index.jsx 进行内置组件包裹的部分
    * 最后才是在组件中可以正常使用的部分了
```javascript
// 使用我们的 toolkit 的开发模式
// 通过 toolkit 创建的 slice store 片段
import { createSlice } from "@reduxjs/toolkit"

const homeSlice = createSlice({
    name: "home",
    initialState: {

    },
    reducers: {

    }
})
export default homeSlice.reducer
```
```javascript
// 原本的 redux 开发中含有四个文件的
// 一个是我们的汇总文件 index
// 一个是我们的 reducer 文件
// 一个是我们的 constant 常量文件
// 一个是我们的 createAction 创建事件的文件
```

---
### 网络请求配置 axios 
* 网络请求的话含有我们的 axios | Native-Ajax | fetch 
  * 时用的最多的就是我们的 axios 了
  * `npm install axios`
* 但是为了降低我们的项目对 axios 第三方库的依赖程度
  * 我们是需要进行二次封装后使用的，降低耦合度吧

---
### base-ui 
* 含有对 ant-design 或者 material-ui 的二次封装
  * 欢迎各位前端开源爱好者的提交 pr

--- 
### 项目介绍
* 该项目主要使用了 react、redux、fakerJs、axios、react-redux、redux-toolkit、ant-design、material-ui
  * 同时由于后端接口的原因，引入了 fakerJS 来实现前端自行模拟数据，所以说是一个全面的脱离了后端的纯前端静态面
    * 为什么模拟数据不选择 mock-server 或者 json-server呐
      * 原因在于使用 mock-server 的话会导致在开发过程中要不断的启动 mock-server 来实现一些效果
      * 然后使用 fakerJs 的话在代码是可以控制自己的数据模板的，同时也很好的使用 try...catch 语句来实现控制
      * 所以说就是选择的 fakerJs 工具，同时在未来的工作中也是可以大量使用的呐
* 同时使用 cargo 配置来实现我们的修改 webpack 配置
  * 在通过 create-react-app 脚手架中，webpack 的配置是隐藏的
  * 虽然提供了 `npm run eject` 命令，
  * 但是还是十分不妥当的呐，因为这个命名是不可逆的，所以说就通过 cargo 来间接性的修改 webpack 配置了

---
### 项目开发规范
> * 文件夹，文件名统一小写，多个单词使用连接符 - 连通
> * JavaScript 变量使用小驼峰命名，组件名使用大驼峰命名
> * CSS 采用 style-component 来实现的编写的
>   * npm install styled-components
> * 函数式组件的定义一定使用纯组件，使用 memo 进行包裹
> * 组件内部的书写规范
>   * 组件内部的 state 管理
>   * redux 的 hooks 代码
>   * 其他相关的 hooks API
>   * 返回我们的 JSX 代码
> * store 的定义全面使用 redux-toolkit 的开发模式
> * 网络请求 axios 使用二次封装后的请求 axios 工具
> * 组件库使用 ant-design 和 mui，同时对组件进行二次封装使用，
>   * 尽量不要直接使用组件库的 ui
> * 全面的使用 devOps 开发模式了
> * 同时需要对一些函数进行抽取
>   * 通过一系列的抽取，本项目的有些代码的可复用性还是蛮强的
>   * 在每一个组件里面只需要进行调用对象的 API 接口即可

---
### 该静态前端界面存在的问题
* 还需要等待最后的 TypeScript 的整体重构
* 但是项目已经成型了，所以说重构的话还需要很大的时间
* 或许说时间是我程序员时间的一辈子吧