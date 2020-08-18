import React from "react"
import { useDispatch } from "react-redux"
import { completeTodo, deleteTodo, TodoListItem } from "../../ducks/todolist"
import "./ReduxTodoItem.css"

interface TodoItemProps {
    item: TodoListItem
}

const ReduxTodoItem = ({ item: { id, description, completed } }: TodoItemProps) => {
    const dispatch = useDispatch()

    function setDone(id: string, completed: boolean) {
        dispatch(completeTodo(id, completed))
    }

    function remove(id: string) {
        dispatch(deleteTodo(id))
    }

    return (
        <li>
            <input type="checkbox"
                   id={`todo-item-${id}`}
                   checked={completed}
                   onChange={e => setDone(id, e.target.checked)}/>
            <label htmlFor={`todo-item-${id}`}
                   className={completed ? "completed" : ""}>
                {description}
            </label>
            <button type="button"
                    className="delete"
                    onClick={() => remove(id)}>
                x
            </button>
        </li>
    )
}

export default ReduxTodoItem
