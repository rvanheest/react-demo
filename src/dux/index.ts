import { combineReducers, Middleware } from "redux"

export const customMiddleware: Middleware[] = [
]

export interface ReduxStore {
}

export default combineReducers<ReduxStore>({
})
