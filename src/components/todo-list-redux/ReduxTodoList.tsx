import React from "react"
import { useSelector } from "react-redux"
import ReduxTodoItem from "./ReduxTodoItem"
import { getTodoList } from "../../ducks/todolist"
import "./ReduxTodoList.css"

const ReduxTodoList = () => {
    const list = useSelector(getTodoList)

    if (list.length == 0)
        return (
            <p className="emptyList">Nothing to display</p>
        )
    else
        return (
            <ul className="todoList">
                {
                    list.map(item => <ReduxTodoItem key={item.id} item={item}/>)
                }
            </ul>
        )
}

export default ReduxTodoList
