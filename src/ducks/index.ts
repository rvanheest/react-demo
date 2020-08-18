import { combineReducers, Middleware } from "redux"
import counterReducer, { CounterState } from "./counter"
import todoReducer, { TodoListState } from "./todolist"

export interface ReduxStore {
    count: CounterState
    todo: TodoListState,
}

export default combineReducers<ReduxStore>({
    count: counterReducer,
    todo: todoReducer,
})

export const customMiddleware: Middleware[] = [
]
