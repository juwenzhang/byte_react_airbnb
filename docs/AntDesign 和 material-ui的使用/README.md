## react 项目中集成 ant-design ui 库
* 国外的话就是主要是 material 的设计风格，主要的话就是我们的 material ui 的设计
  * **ant-design 的集成**
    * 安装
      * `npm install antd --save`
    * 解决 react19
      * `npm install --save-dev @ant-design/v5-patch-for-react-19`
  * **material ui 的集成**
    * 集成 emotion 书写 CSS 的安装
      * `npm install @mui/material @emotion/react @emotion/styled`
    * material ui 结合 styled-components 使用
        * `npm install @mui/material @mui/styled-engine-sc styled-components`
    * 同时还可以集成我们的 material ui 默认的字体风格
      * `npm install @fontsource/roboto`
    * 还可以实现集成 material ui 的 icon 字体
      * `npm install @mui/icons-material`
    * material 主要实现的是我们的 CSS IN JS 的设计风格吧
      * 但是主要是使用的 emotion 来实现的，但是还是提供了 styled-components 的技术的
      * 如何想要使用我们的 styled-components 的编写，需要我们在项目中集成额外的配置
      * 主要需要进行修改的配置就是我们的 
        * webpack.config.js
          * 但是我们的项目中的 webpack 没有通过 eject 弹出
          * 所以说就是配置的 cargo.config.js
          * 就是在我们的 alias 字段中配置: `'@mui/styled-engine': '@mui/styled-engine-sc'`
        * jsconfig.json
          * 在 paths 字段中配置: `"@mui/styled-engine": ["./node_modules/@mui/styled-engine-sc"]`
        * next.config.js