import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { ReduxStore } from "../../ducks"
import { decrement, increment } from "../../ducks/counter"
import "./ReduxCounter.css"

const ReduxCounter = () => {
    const count = useSelector<ReduxStore>(state => state.count.count)

    const dispatch = useDispatch()
    const inc = () => dispatch(increment())
    const dec = () => dispatch(decrement())

    return (
        <div className="redux-counter">
            <p>count: {count}</p>
            <button onClick={dec}>Decrement</button>
            <button onClick={inc}>Increment</button>
        </div>
    )
}

export default ReduxCounter
