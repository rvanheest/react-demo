import { applyMiddleware, CombinedState, createStore, Middleware, Store } from "redux"
import { inDevelopmentMode } from "./config"
import reducers, { customMiddleware, ReduxStore } from "./ducks/index"

export const newStore: () => Store<CombinedState<ReduxStore>> = () => {
    const predicate = () => true // if you want to see all actions
    // const predicate = () => false // if you want to see no actions

    const sharedMiddleware: Middleware[] = [
        ...customMiddleware,
    ]

    if (inDevelopmentMode) {
        const { createLogger } = require("redux-logger")
        const { composeWithDevTools } = require("redux-devtools-extension")
        const composeEnhancers = composeWithDevTools({ predicate })
        return createStore(
            reducers,
            composeEnhancers(
                applyMiddleware(
                    ...sharedMiddleware,
                    createLogger({ predicate }),
                ),
            )
        )
    }
    else {
        return createStore(
            reducers,
            applyMiddleware(
                ...sharedMiddleware,
            ),
        )
    }
}
