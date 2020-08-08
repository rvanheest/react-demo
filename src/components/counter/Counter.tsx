import React, { useState } from "react"
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0)

    const inc = () => setCount(count + 1)
    const dec = () => setCount(count - 1)

    return (
        <div className="counter">
            <p>count: {count}</p>
            <button onClick={dec}>Decrement</button>
            <button onClick={inc}>Increment</button>
        </div>
    )
}

export default Counter
