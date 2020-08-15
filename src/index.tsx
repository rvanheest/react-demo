import "@babel/polyfill"
import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { newStore } from "./redux-store"

ReactDOM.render(
    <App store={newStore()}/>,
    document.getElementById("root"),
)
