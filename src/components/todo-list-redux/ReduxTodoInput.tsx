import React, { ChangeEvent, FormEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../ducks/todolist"
import "./ReduxTodoInput.css"

const ReduxTodoInput = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        if (!!text) {
            dispatch(addTodo(text))
            setText("")
        }
    }

    return (
        <form className="todo-input" onSubmit={handleSubmit}>
            <input type="text" name="todo-input" value={text} onChange={onInputChange}/>
            <button type="submit" disabled={!text}>Add</button>
        </form>
    )
}

export default ReduxTodoInput
