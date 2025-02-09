## 对组件库的二次封装

### 对 Rate 评分组件的封装
* 来自于 ant-design 下的 Rate 组件
  * 需要传递参数是:
    * allowHalf: 默认是10，非必须参数，boolean
    * ThemeColor: 星星显示的颜色，非必须，string
    * rate: 评分多少，必须，number
    * starNum: 星级准则，默认以10作为满分进行评判，number