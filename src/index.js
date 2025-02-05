import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux";

import App from "./App";
import store from "./store/index";
import "normalize.css"
import "./assets/css/index.less"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback="loading...">
            <HashRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </HashRouter>
        </Suspense>
    </React.StrictMode>
)
