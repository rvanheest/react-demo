import React, { ChangeEvent, FormEvent, useState } from "react"
import "./TodoInput.css"

interface TodoInputProps {
    onAdd: (descr: string) => void
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
    const [text, setText] = useState("")

    function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
        setText(e.target.value)
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        if (!!text) {
            onAdd(text)
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

export default TodoInput
