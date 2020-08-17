import { combineReducers, Middleware } from "redux"
import counterReducer, { CounterState } from "./counter"

export interface ReduxStore {
    count: CounterState
}

export default combineReducers<ReduxStore>({
    count: counterReducer
})

export const customMiddleware: Middleware[] = [
]
