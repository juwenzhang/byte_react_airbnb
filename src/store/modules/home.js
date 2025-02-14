// 使用我们的 toolkit 的开发模式
import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import {
    getHomeHighGoodPriceData,
    getHomeMiddlePriceData,
    getHomeLowerPriceData,
    getHoneLongForInfoData
} from "../../services/index";
import {
    fetchData
} from "../../utils/home-page/fetch-data-utils";
import {
    sectionOneData,
    sectionTwoData,
    sectionThreeData,
    longForData
} from "../../fakers/Home/index";

// 开始我们的请求
export const fetchHighPriceGoodsInfoDataAction = createAsyncThunk(
    "fetchHighPriceGoodsInfoData",
    fetchData(getHomeHighGoodPriceData, sectionOneData)
);
export const fetchMiddlePriceGoodsInfoDataAction = createAsyncThunk(
    "fetchMiddlePriceGoodsInfoDataAction",
    fetchData(getHomeMiddlePriceData, sectionTwoData)
);
export const fetchLowerPriceGoodsInfoDataAction = createAsyncThunk(
    "fetchLowerPriceGoodsInfoDataAction",
    fetchData(getHomeLowerPriceData, sectionThreeData)
);
export const fetchLongForInfoDataAction = createAsyncThunk(
    "fetchLongForInfoDataAction",
    fetchData(getHoneLongForInfoData, longForData, 50)
)


// 创建 home-page 的 store slice
const homeSlice = createSlice({
    name: "home",
    initialState: {
        HighPriceGoodsInfo: {}, // 确保字段名一致 section-one
        MiddlePriceGoodsInfo: {}, // section-two
        LowerPriceGoodsInfo: {}, // section-three
        LongForInfo: {},  // 渴望得到的产品
    },
    reducers: {
        changeHighPriceGoodsInfoAction: (state, action) => {
            state.HighPriceGoodsInfo = action.payload;
        },
        changeMiddlePriceGoodsInfoAction: (state, action) => {
            state.MiddlePriceGoodsInfo = action.payload
        },
        changeLowerPriceGoodsInfoAction: (state, action) => {
            state.LowerPriceGoodsInfo = action.payload
        },
        changeLongForInfoAction: (state, action) => {
            state.LongForInfo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHighPriceGoodsInfoDataAction.fulfilled, (state, action) => {
                // 由于是自己的 mock 的数据，所以说不管如何都是 fulfilled 的情况，如果想要有错误，可以上面的 fetch 函数就需要改动
                state.HighPriceGoodsInfo = action.payload;
            })
            .addCase(fetchHighPriceGoodsInfoDataAction.rejected, (state, action) => {
                return sectionOneData(100);
            })
            .addCase(fetchMiddlePriceGoodsInfoDataAction.fulfilled, (state, action) => {
                state.MiddlePriceGoodsInfo = action.payload
            })
            .addCase(fetchMiddlePriceGoodsInfoDataAction.rejected, state => {
                return sectionTwoData(100)
            })
            .addCase(fetchLowerPriceGoodsInfoDataAction.fulfilled, (state, action) => {
                state.LowerPriceGoodsInfo = action.payload
            })
            .addCase(fetchLowerPriceGoodsInfoDataAction.rejected, state => {
                return sectionThreeData
            })
            .addCase(fetchLongForInfoDataAction.fulfilled, (state, action) => {
                state.LongForInfo = action.payload
            })
            .addCase(fetchLongForInfoDataAction.rejected, (state) => {
                return longForData
            })
    }
});


// 开始导出
export const {
    changeHighPriceGoodsInfoAction,
    changeMiddlePriceGoodsInfoAction,
    changeLowerPriceGoodsInfoAction,
    changeLongForInfoAction,
} = homeSlice.actions;
export default homeSlice.reducer;