import React from "react"
import { Demo } from "./DemoQueries"

interface ConsoleChoice {
    demo: Demo
    id: string
    defaultChecked: boolean

    onSelect: (demo: Demo) => void
}

const ConsoleChoice = ({ demo, id, defaultChecked, onSelect }: ConsoleChoice) => (
    <div className="console-choice">
        <input type="radio"
               id={id}
               name="demos"
               value={id}
               defaultChecked={defaultChecked}
               onChange={() => onSelect(demo)}/>
        <label htmlFor={id}>{demo.description}</label>
    </div>
)

export default ConsoleChoice
