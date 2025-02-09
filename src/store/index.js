import { configureStore } from "@reduxjs/toolkit"

import homeReducer from "./modules/home"
import entireReducer from "./modules/entire"

const store = configureStore({
    reducer: {
        home: homeReducer,
        entire: entireReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
})

export default store