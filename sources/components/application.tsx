import "../assets/scss/index.scss"
import "../assets/scss/components/application.scss"

import * as React from "react"

import logo from "../assets/images/logo.svg"

/**
 * An example of a component.
 */
export class ApplicationComponent extends React.Component {
    render(): React.ReactElement {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo.toString()} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>sources/components/application.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      Learn how to React
                    </a>
                </header>
            </div>
        )
    }
}
