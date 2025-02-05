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