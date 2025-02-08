## 搭建首页页面

### HomeBanner 页面的搭建
* 以前的网站的话主要是以轮播图作为自己的 Banner
  * 但是这个网页的建设的话就不是使用的轮播图了，就是使用的其他的形式的展示作为的我们的 Banner 设计了
* 首先这里需要注意一点的是在 JS 文件中导入图片的两种方法
  * require 导入，require 导入默认是同步的
  * URL 方法导入，后面需要跟上我们的 href 属性才可以的
  * 这些都是我们的开发小技巧了，记一记就可以了
    * background-size: cover 就是将我们的背景图片实现的是充满我们的背景大小的

### 时间搓问题的解决
* 在开发中遇到了时间限制问题
  * 因为接口的话本身是具备一定的问题的
  * 所以说项目使用的是 faker 实现的自动生成数据的
  * 但是 faker 生成的数据具备一定的时间搓问题，这个时候就需要使用 map 和 toISOString 方法
  * 对数据进行一定的序列化操作了
```javascript
// 使用我们的 toolkit 的开发模式
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getHomeGoodPriceData} from "../../services/index";
import createHomeDataTemplate from "../../utils/home-data-template";

// 开始我们的请求
export const fetchHighPriceGoodsInfoDataAction = createAsyncThunk(
    "fetchHighPriceGoodsInfoData",
    async (payload) => {
        const res = await getHomeGoodPriceData();
        // console.log("High price goods data fetched successfully:", res?.data);
        if (res?.data) {
            return res?.data;
        } else {
            // console.log("Failed to fetch high price goods data");
            const HighPriceGoodsInfoData = createHomeDataTemplate(8);
            // console.log("Using mock data:", HighPriceGoodsInfoData);
            console.log(HighPriceGoodsInfoData);
            // 开始数据的序列化操作: 开发中遇到的时间搓问题
            return HighPriceGoodsInfoData
                ?.goodsList.map((item) => ({
                    ...item,
                    publishDate: item.publishDate.toISOString(),
                }));
        }
    }
);
```