import React, { useState } from "react"
import { v4 as uuid } from "uuid"
import TodoList from "./TodoList"
import "./TodoPage.css"
import TodoInput from "./TodoInput"

export interface TodoListItem {
    id: string
    description: string
    completed: boolean
}

const TodoPage = () => {
    const [todoList, setTodoList] = useState<TodoListItem[]>([{
        id: uuid(),
        description: "add input form",
        completed: false,
    }, { id: uuid(), description: "add checkmarks", completed: false }])

    function addTodoListItem(todo: string): void {
        setTodoList([...todoList, { id: uuid(), description: todo, completed: false }])
    }

    function removeTodoListItem(todoId: string): void {
        setTodoList(todoList.filter(({ id }) => todoId != id))
    }

    function completeItem(todoId: string, done: boolean): void {
        setTodoList(
            todoList.map(todo => {
                if (todo.id == todoId)
                    return { ...todo, completed: done }
                else
                    return todo
            }),
        )
    }

    return (
        <div className="todo">
            <h2>To do list</h2>
            <TodoInput onAdd={addTodoListItem}/>
            <TodoList list={todoList}
                      setItemDone={completeItem}
                      removeItem={removeTodoListItem}
            />
        </div>
    )
}

export default TodoPage
