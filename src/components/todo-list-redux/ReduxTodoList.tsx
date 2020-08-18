import React from "react"
import ReduxTodoItem from "./ReduxTodoItem"
import { useSelector } from "../../ducks"
import "./ReduxTodoList.css"

const ReduxTodoList = () => {
    const list = useSelector(state => state.todo.list)

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
