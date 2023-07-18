import React from "react";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>

    </StrictMode>
)