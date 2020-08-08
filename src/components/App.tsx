import React from "react"
import Counter from "./Counter"

const App = () => (
    <div>
        <h1>Hello world</h1>
        <Counter/>
    </div>
)

export default () => (
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
