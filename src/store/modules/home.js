// 使用我们的 toolkit 的开发模式
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getHomeGoodPriceData} from "../../services/index";
import createHomeDataTemplate from "../../utils/home-data-template";

// 开始我们的请求
export const fetchHighPriceGoodsInfoDataAction = createAsyncThunk(
    "fetchHighPriceGoodsInfoData",
    async () => {
        try {
            const res = await getHomeGoodPriceData();
            if (res?.data) {
                return res.data;
            }
        } catch (error) {
            console.error("Failed to fetch high price goods data:", error);
        }

        // 使用模拟数据
        const HighPriceGoodsInfoData = createHomeDataTemplate(8);
        console.log("Using mock data:", HighPriceGoodsInfoData);

        // 序列化模拟数据
        const serHighPriceGoodsInfoData = HighPriceGoodsInfoData?.goodsList.map((item) => ({
            ...item,
            publishDate: item.publishDate.toISOString(), // 调用 toISOString 方法
        }));

        return serHighPriceGoodsInfoData;
    }
);

const homeSlice = createSlice({
    name: "home",
    initialState: {
        HighPriceGoodsInfo: {}, // 确保字段名一致
    },
    reducers: {
        changeHighPriceGoodsInfoAction: (state, action) => {
            state.HighPriceGoodsInfo = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHighPriceGoodsInfoDataAction.fulfilled, (state, action) => {
                state.HighPriceGoodsInfo = action.payload;
            })
            .addCase(fetchHighPriceGoodsInfoDataAction.rejected, (state) => {
                const HighPriceGoodsInfoData = createHomeDataTemplate(8);
                console.log("Using mock data:", HighPriceGoodsInfoData);

                // 序列化模拟数据
                const serHighPriceGoodsInfoData = HighPriceGoodsInfoData?.goodsList.map((item) => ({
                    ...item,
                    publishDate: item.publishDate.toISOString, // 调用 toISOString 方法
                }));

                state.HighPriceGoodsInfo = serHighPriceGoodsInfoData;
            });
    }
});

export const { changeHighPriceGoodsInfoAction } = homeSlice.actions;
export default homeSlice.reducer;