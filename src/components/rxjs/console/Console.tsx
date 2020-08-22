import React, { useEffect, useRef, useState } from "react"
import { EMPTY, from, generate, interval, NEVER, Observable, of, range, Subscription } from "rxjs"
import "./Console.css"

interface Demo<T = any> {
    description: string | JSX.Element
    text: string
    stream$: Observable<T>
}

const demos: Demo[] = [
    {
        description: <code>never()</code>,
        text: "never",
        stream$: NEVER,
    },
    {
        description: <code>empty()</code>,
        text: "empty",
        stream$: EMPTY,
    },
    {
        description: <code>of(1, 2, 3)</code>,
        text: "of(1, 2, 3)",
        stream$: of(1, 2, 3),
    },
    {
        description: <code>from([1, 2, 3, 4, 5, 6])</code>,
        text: "from([1, 2, 3, 4, 5, 6])",
        stream$: from([1, 2, 3, 4, 5, 6]),
    },
    {
        description: <span><code>create</code> - 3x <em>next</em>, then <em>complete</em></span>,
        text: "create - 3x next, then complete",
        stream$: new Observable(observer => {
            observer.next(1)
            observer.next(2)
            observer.next(3)
            observer.complete()
        }),
    },
    {
        description: <span><code>create</code> - 3x <em>next</em>, then <em>error</em></span>,
        text: "create - 3x next, then error",
        stream$: new Observable(observer => {
            observer.next(1)
            observer.next(2)
            observer.next(3)
            observer.error(new Error("Biem!!!"))
            observer.complete()
        }),
    },
    {
        description: <code>range(0, 10)</code>,
        text: "range(0, 10)",
        stream$: range(0, 10),
    },
    {
        description: <code>interval(1000)</code>,
        text: "interval(1000)",
        stream$: interval(1000),
    },
]

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
                {
                    demos.map((demo, index) => (
                        <div className="console-choice" key={`demo-${index}`}>
                            <input type="radio"
                                   id={`demo-${index}`}
                                   name="demos"
                                   value={`demo-${index}`}
                                   defaultChecked={index == 0}
                                   onChange={() => setActiveDemo(demo)}/>
                            <label htmlFor={`demo-${index}`}>{demo.description}</label>
                        </div>
                    ))
                }
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
