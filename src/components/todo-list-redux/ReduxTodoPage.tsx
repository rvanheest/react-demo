import React from "react"
import ReduxTodoList from "./ReduxTodoList"
import ReduxTodoInput from "./ReduxTodoInput"
import "./ReduxTodoPage.css"

const ReduxTodoPage = () => (
    <div className="todo">
        <h2>To do list</h2>
        <ReduxTodoInput/>
        <ReduxTodoList/>
    </div>
)

export default ReduxTodoPage
