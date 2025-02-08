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

### 图片的结构设计
* 我们的图片的话为了更好的进行展示和懒加载，这个时候，我们是可以
  * 在图片外部包裹一个 padding 盒子的
  * 然后在盒子内部进行显示我们的图片
    * 父相子绝实现我们的图片显示
  * 这个时候就可以实现我们的即使图片是没有的，但是还是会有一个占位的容器等待我们的图片加载
* 这里就体现了一点
  * 我们的 relative 定义是用来决定我们的元素占位的，但是实际上的话还是没有脱离标准流
  * 我们的 absolute 定义是用来在父盒子内部实现自由移动，可以居中，还可以是其他的任何场景应用吧
  * 这个也是我们的网页中的先决定结构，然后决定显示的一种设计模式吧
  * 还可以利用这个来实现我们的图片懒加载的样式设计吧
  * 我个人的 CSS 功底是十分差的，所以说开发项目是十分困难的，当没有 UI 的时候
```javascript
import styled from 'styled-components';

export const SectionItemWrapper = styled.div`
                                  width: 25%;
padding: 8px;
box-sizing: border-box;

.section-item-inner {
  width: 100%;

  .section-item-cover {
    position: relative;
    box-sizing: border-box;
    padding: 100% 8px 0; // 这个时候就创建了一个为正方形的卡片以及宽度 这个正方形就用来存放我们的图片了
    border-radius: 4px;
    overflow: hidden;
    margin: 10px 0;
    transition: all 0.5s ease;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    @media (max-width: 768px) {
      .section-item-cover {
        box-shadow: 0 4px 8px 0 rgba(77, 76, 76, 0.15);
        transform: translate3d(0, 0, -5px);
      }
    }
  }

  .section-item-title {
    color: #46413e
  }

  .section-item-detail {
    color: #675e4e;
    text-overflow: ellipsis;
  }

  .section-item-price {
    color: #be5555;
  }
}

&:hover {
  cursor: pointer;

  .section-item-cover {
    box-shadow: 0 8px 8px 0 rgba(77, 76, 76, 0.2),
    0 20px 20px 0 rgba(77, 76, 76, 0.2);
    transform: translate3d(0, 0 , 10px);
  }
}
`
```