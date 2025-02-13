import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter} from "react-router-dom"
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "antd/dist/reset.css"


import App from "./App";
import store from "./store/index";
import "normalize.css"
import "./assets/css/index.less"
import { lightTheme } from "./assets/theme"
import { LazyPage } from "./components/app-lazy/lazyPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <Suspense fallback={<LazyPage/>}>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Provider store={store}>
                    <ThemeProvider theme={ lightTheme }>
                        <App/>
                    </ThemeProvider>
                </Provider>
            </HashRouter>
        </Suspense>
    // </React.StrictMode>
)
