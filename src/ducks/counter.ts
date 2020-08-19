import { AnyAction } from "redux"
import { ReduxStore } from "./index"

enum CounterAction {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
}

export interface CounterState {
    count: number
}

const initialCounterState: CounterState = {
    count: 0,
}

export default (state: CounterState = initialCounterState, action: AnyAction) => {
    switch (action.type) {
        case CounterAction.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case CounterAction.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            return state
    }
}

export const increment = () => ({ type: CounterAction.INCREMENT })
export const decrement = () => ({ type: CounterAction.DECREMENT })

export const getCount = (state: ReduxStore) => state.count.count
