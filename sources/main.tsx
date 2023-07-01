import * as React from "react"
import ReactDOM from "react-dom/client"

import {ApplicationComponent} from "./components/application.js"

const root = ReactDOM.createRoot(
    document.getElementById("root")!,
)

root.render(
    <React.StrictMode>
        <ApplicationComponent />
    </React.StrictMode>,
)
