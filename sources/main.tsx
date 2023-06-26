/* eslint-disable import/no-internal-modules */
import React from "react"
import ReactDOM from "react-dom/client"

import {Application} from "./components/application.js"

const root = ReactDOM.createRoot(
    document.getElementById("root")!,
)

root.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>,
)
