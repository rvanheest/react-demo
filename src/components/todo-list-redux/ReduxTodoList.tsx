import React from "react"
import { useSelector } from "react-redux"
import ReduxTodoItem from "./ReduxTodoItem"
import { ReduxStore } from "../../ducks"
import { TodoListItem } from "../../ducks/todolist"
import "./ReduxTodoList.css"

const ReduxTodoList = () => {
    const list = useSelector<ReduxStore, TodoListItem[]>(state => state.todo.list)

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
