import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detailInfo: {}
  },
  reducers: {
    changeDetailInfoAction(state, action) {
      state.detailInfo = action.payload;
    },
  },
});

export const {
    changeDetailInfoAction
} = detailSlice.actions;
export default detailSlice.reducer