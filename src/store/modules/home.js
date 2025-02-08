// 使用我们的 toolkit 的开发模式
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getHomeGoodPriceData} from "../../services/index";
import {HighPriceGoodsInfoData} from "../../assets/data/home-page";
import {fetchData} from "../../utils/home-page/fetch-data-utils";

// 开始我们的请求
export const fetchHighPriceGoodsInfoDataAction = createAsyncThunk(
    "fetchHighPriceGoodsInfoData",
    fetchData(getHomeGoodPriceData, HighPriceGoodsInfoData)
);

const homeSlice = createSlice({
    name: "home",
    initialState: {
        HighPriceGoodsInfo: {}, // 确保字段名一致
    },
    reducers: {
        changeHighPriceGoodsInfoAction: (state, action) => {
            console.log(action.payload)
            state.HighPriceGoodsInfo = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHighPriceGoodsInfoDataAction.fulfilled, (state, action) => {
                // console.log(action.payload)
                // 由于是自己的 mock 的数据，所以说不管如何都是 fulfilled 的情况，如果想要有错误，可以上面的 fetch 函数就需要改动
                state.HighPriceGoodsInfo = action.payload;
            })
            .addCase(fetchHighPriceGoodsInfoDataAction.rejected, (state, action) => {
                return HighPriceGoodsInfoData(8);
            });
    }
});

export const { changeHighPriceGoodsInfoAction } = homeSlice.actions;
export default homeSlice.reducer;