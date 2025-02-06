import { useRoutes } from "react-router-dom";
import { routes } from "./router/index";
import { memo } from "react";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

const App = memo(() => {
    return (
        <div className="App">
            <AppHeader />
            <div className="content">
                { useRoutes(routes) }
            </div>
            <AppFooter />
        </div>
    );
})

export default App;
