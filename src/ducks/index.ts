import { combineReducers, Middleware } from "redux"
import { useSelector as libUseSelector } from "react-redux"
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

export function useSelector<TSelected>(selector: (state: ReduxStore) => TSelected,
                                       equalityFn?: (left: TSelected, right: TSelected) => boolean): TSelected {
    return libUseSelector<ReduxStore, TSelected>(selector, equalityFn)
}
