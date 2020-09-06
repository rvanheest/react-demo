import React, { useEffect, useRef, useState } from "react"
import { fromEvent } from "rxjs"
import { map, throttleTime } from "rxjs/operators"
import "./MousePosition.css"

const MousePosition = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [throttle, setThrottle] = useState(false)

    useEffect(() => {
        const mouseMoves$ = fromEvent<MouseEvent>(ref.current!!, "mousemove")
        const throttled$ = throttle ? mouseMoves$.pipe(throttleTime(100)) : mouseMoves$
        const coordinates$ = throttled$.pipe(map(event => [event.offsetX, event.offsetY]))
        const subscription = coordinates$.subscribe(([x, y]) => {
            setX(x)
            setY(y)
        })

        return function cleanup() {
            return subscription.unsubscribe()
        }
    }, [throttle])

    return (
        <>
            <div id="throttling">
                <input type="checkbox" id="throttled" checked={throttle} onChange={() => setThrottle(checked => !checked)}/>
                <label htmlFor="throttled">Throttle mouse moves</label>
            </div>
            <div ref={ref} className="canvas">
                <p>x: {x}</p>
                <p>y: {y}</p>
            </div>
        </>
    )
}

export default MousePosition
