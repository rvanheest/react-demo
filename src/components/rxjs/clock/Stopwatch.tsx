import React, { useEffect, useRef, useState } from "react"
import { fromEvent, interval, NEVER } from "rxjs"
import { map, scan, switchMap, tap } from "rxjs/operators"

const Stopwatch = () => {
    const [datetime, setDatetime] = useState(new Date())
    const [running, setRunning] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const subscription = fromEvent<MouseEvent>(buttonRef.current!!, "click")
            .pipe(
                scan(({ run }) => ({ run: !run }), { run: running }),
                tap(({ run }) => setRunning(run)),
                switchMap(({ run }) => run ? interval(1000).pipe(map(() => new Date())) : NEVER),
            )
            .subscribe(setDatetime)

        return function cleanup() {
            subscription.unsubscribe()
        }
    }, [])

    return (
        <div className="clock">
            <p><b>Stoppable time</b></p>
            <p>{datetime.toLocaleString()}</p>
            <button ref={buttonRef}>{running ? "Stop" : "Start"}</button>
        </div>
    )
}

export default Stopwatch
