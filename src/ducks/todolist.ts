import { v4 as uuid } from "uuid"
import { AnyAction } from "redux"

enum TodoListAction {
    ADD_ITEM = "ADD_ITEM",
    COMPLETE_ITEM = "COMPLETE_ITEM",
    DELETE_ITEM = "DELETE_ITEM",
}

export interface TodoListItem {
    id: string
    description: string
    completed: boolean
}

export interface TodoListState {
    list: TodoListItem[]
}

export const initialTodoListState: TodoListState = {
    list: [
        {
            id: uuid(),
            description: "add input form",
            completed: false,
        },
        {
            id: uuid(),
            description: "add checkmarks",
            completed: true,
        },
    ],
}

export default function reducer(state: TodoListState = initialTodoListState, action: AnyAction) {
    switch (action.type) {
        case TodoListAction.ADD_ITEM:
            return {
                ...state,
                list: [
                    ...state.list,
                    { id: uuid(), description: action.payload, completed: false },
                ],
            }
        case TodoListAction.COMPLETE_ITEM:
            return {
                ...state,
                list: state.list.map(todo =>
                    todo.id == action.payload.id
                        ? { ...todo, completed: action.payload.completed }
                        : todo,
                ),
            }
        case TodoListAction.DELETE_ITEM:
            return {
                ...state,
                list: state.list.filter(({ id }) => action.payload != id),
            }
        default:
            return state
    }
}

export const addTodo = (description: string) => ({
    type: TodoListAction.ADD_ITEM,
    payload: description,
})
export const completeTodo = (id: string, completed: boolean) => ({
    type: TodoListAction.COMPLETE_ITEM,
    payload: {
        id,
        completed,
    },
})
export const deleteTodo = (id: string) => ({
    type: TodoListAction.DELETE_ITEM,
    payload: id,
})
