import { combineReducers, Middleware } from "redux"

export interface ReduxStore {
}

export default combineReducers<ReduxStore>({
})

export const customMiddleware: Middleware[] = [
]
