import { useRoutes } from "react-router-dom";
import { routes } from "./router/index";
import { memo } from "react";

const App = memo(() => {
    return (
        <div className="App">
            <div className="header">header</div>
            <div className="content">
                { useRoutes(routes) }
            </div>
            <div className="footer">footer</div>
        </div>
    );
})

export default App;
