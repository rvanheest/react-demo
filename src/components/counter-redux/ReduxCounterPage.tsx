import React from "react"
import ReduxCounter from "./ReduxCounter"
import './ReduxCounterPage.css'

const ReduxCounterPage = () => (
    <div className="redux-counter-page">
        <h2>Counter example with global state</h2>
        <ReduxCounter/>
    </div>
)

export default ReduxCounterPage
