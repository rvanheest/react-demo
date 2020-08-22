import React, { useEffect, useState } from "react"
import { interval } from "rxjs"
import { map } from "rxjs/operators"
import "./Clock.css"

const Clock = () => {
    const [datetime, setDatetime] = useState(new Date())

    useEffect(() => {
        const subscription = interval(1000)
            .pipe(map(() => new Date()))
            .subscribe(setDatetime)

        return function cleanup() {
            subscription.unsubscribe()
        }
    }, [])

    return (
        <div className="clock">
            <p><b>Current time</b></p>
            <p>{datetime.toLocaleString()}</p>
        </div>
    )
}

export default Clock
