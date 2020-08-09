import React from "react"
import { TodoListItem } from "./TodoPage"
import "./TodoList.css"
import TodoItem from "./TodoItem"

interface TodoListProps {
    list: TodoListItem[]

    setItemDone: (id: string, done: boolean) => void
    removeItem: (id: string) => void
}

const TodoList = ({ list, setItemDone, removeItem }: TodoListProps) => {
    if (list.length == 0)
        return (
            <p className="emptyList">Nothing to display</p>
        )
    else
        return (
            <ul className="todoList">
                {
                    list.map(item => <TodoItem key={item.id} item={item} setDone={setItemDone} remove={removeItem}/>)
                }
            </ul>
        )
}

export default TodoList
