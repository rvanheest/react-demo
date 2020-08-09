import React from "react"
import { TodoListItem } from "./TodoPage"
import "./TodoItem.css"

interface TodoItemProps {
    item: TodoListItem

    setDone: (id: string, done: boolean) => void
    remove: (id: string) => void
}

const TodoItem = ({ item: { id, description, completed }, setDone, remove }: TodoItemProps) => (
    <li>
        <input type="checkbox" id={`todo-item-${id}`} onChange={e => setDone(id, e.target.checked)}/>
        <label htmlFor={`todo-item-${id}`} className={completed ? "completed" : ""}>{description}</label>
        <button type="button" className="delete" onClick={() => remove(id)}>x</button>
    </li>
)

export default TodoItem
