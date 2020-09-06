import React from "react"
import { EMPTY, from, interval, NEVER, Observable, of, range } from "rxjs"
import conwayLookAndSay from "./RxConwayLookAndSay"
import mergeMapDemo from "./RxSwitchMapOperator"
import fibonacci from "./RxFibonacci"
import pascal from "./RxPascal"

export interface Demo<T = any> {
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
    {
        description: <span>switchMap</span>,
        text: "switchMap",
        stream$: mergeMapDemo(),
    },
    {
        description: <span>Fibonacci</span>,
        text: "Fibonacci",
        stream$: fibonacci(),
    },
    {
        description: <span>Pascal's Triangle</span>,
        text: "Pascal's Triangle",
        stream$: pascal(),
    },
    {
        description: <span>Conway LookAndSay (<a href="https://en.wikipedia.org/wiki/Look-and-say_sequence"
                                                 target="_blank">link</a>)</span>,
        text: "Conway LookAndSay",
        stream$: conwayLookAndSay(),
    },
]

export default demos
