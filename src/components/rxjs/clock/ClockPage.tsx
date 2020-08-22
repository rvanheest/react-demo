import * as React from "react"
import Clock from "./Clock"
import Stopwatch from "./Stopwatch"

const ClockPage = () => (
    <div className="clock-page">
        <h2>Clock</h2>
        <Clock/>
        <Stopwatch/>
    </div>
)

export default ClockPage
