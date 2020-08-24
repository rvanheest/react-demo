import React, { useEffect, useRef, useState } from "react"
import ConsoleChoice from "./ConsoleChoice"
import demos from "./DemoQueries"
import "./Console.css"

const Console = () => {
    const [activeDemo, setActiveDemo] = useState(demos[0])
    const [output, setOutput] = useState("")
    const outputRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        appendToOutput(`${activeDemo.text}:`, { newline: true })
        const subscription = activeDemo.stream$
            .subscribe(
                x => appendToOutput(`next: ${x}`, { indent: true }),
                e => appendToOutput(`error: ${e.message}`, { indent: true }),
                () => appendToOutput("Completed!!!", { indent: true }),
            )

        return function cleanup() {
            if (subscription && !subscription.closed)
                subscription.unsubscribe()
        }
    }, [activeDemo])

    useEffect(() => {
        if (outputRef.current)
            outputRef.current.scrollTop = outputRef.current.scrollHeight
    }, [output])

    function appendToOutput(s: string, options: { newline?: boolean, indent?: boolean } = { newline: false, indent: false }) {
        const ln = options.newline ? "\n" : ""
        const indent = options.indent ? "  " : ""
        const newText = `${indent}${s}`
        setOutput(prevOutput => prevOutput ? `${prevOutput}\n${ln}${newText}` : newText)
    }

    return (
        <>
            <div className="console-choices">
                <div id="console-choices-left">
                    {
                        demos.slice(0, Math.ceil(demos.length / 2)).map((demo, index) => (
                            <ConsoleChoice key={`demo-${index}`}
                                           demo={demo}
                                           id={`demo-left-${index}`}
                                           defaultChecked={index == 0}
                                           onSelect={setActiveDemo}/>
                        ))
                    }
                </div>
                <div id="console-choices-right">
                    {
                        demos.slice(Math.ceil(demos.length / 2)).map((demo, index) => (
                            <ConsoleChoice key={`demo-${index}`}
                                           demo={demo}
                                           id={`demo-right-${index}`}
                                           defaultChecked={false}
                                           onSelect={setActiveDemo}/>
                        ))
                    }
                </div>
            </div>
            <div className="console-output">
                <div>
                    <button id="clear" onClick={() => setOutput("")}>Clear</button>
                    <span><b>Active demo:</b> {activeDemo?.description ?? "[nothing selected]"}</span>
                </div>
                <textarea ref={outputRef} name="output" rows={30} cols={100} value={output} readOnly/>
            </div>
        </>
    )
}

export default Console
