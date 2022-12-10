import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function Title() {
    useEffect(() => {
        document.title = "Calculator";
    }, []);
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
            <Title />
            <App />
    </React.StrictMode>
);
