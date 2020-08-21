import React, { useEffect, useRef, useState } from "react"
import { fromEvent } from "rxjs"
import { map, throttleTime } from "rxjs/operators"
import "./MousePosition.css"

const MousePosition = () => {
    const ref = useRef<any>(null)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        const subscription = fromEvent<MouseEvent>(ref.current, "mousemove")
            .pipe(
                throttleTime(100),
                map(event => [event.offsetX, event.offsetY]),
            )
            .subscribe(([x, y]) => {
                setX(x)
                setY(y)
            })

        return function cleanup() {
            return subscription.unsubscribe()
        }
    }, [])



    return (
        <div ref={ref} className="canvas">
            <p>x: {x}</p>
            <p>y: {y}</p>
        </div>
    )
}

export default MousePosition
