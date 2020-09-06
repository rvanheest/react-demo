import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import "./Canvas.css"
import { combineLatest, fromEvent, merge, Observable } from "rxjs"
import {
    bufferCount,
    distinctUntilChanged,
    filter,
    map,
    mergeMap,
    startWith,
    tap,
    windowToggle,
    withLatestFrom,
} from "rxjs/operators"

function mouseButtonEvent(canvas: HTMLCanvasElement, event: string, value: boolean): Observable<boolean> {
    return fromEvent<MouseEvent>(canvas, event)
        .pipe(
            filter(e => e.button === 0),
            map(() => value),
        )
}

interface Point {
    x: number
    y: number
}

interface Config {
    prevCoord: Point
    coord: Point
    color: string
    thickness: number
}

function paint(canvas: CanvasRenderingContext2D) {
    return function (config: Config) {
        const { prevCoord: { x: x1, y: y1 }, coord: { x: x2, y: y2 }, color, thickness } = config

        canvas.lineWidth = thickness
        canvas.strokeStyle = color
        canvas.moveTo(x1, y1)
        canvas.lineTo(x2, y2)
        canvas.stroke()
    }
}

function useColor(color: string): [() => JSX.Element, () => Observable<string>] {
    const ref = useRef<HTMLDivElement>(null)
    const click$ = () => fromEvent<MouseEvent>(ref.current!, "click").pipe(map(() => color))

    const Color = () => (
        <div ref={ref} className="color" style={{ background: color }}/>
    )

    return [Color, click$]
}

const Canvas = () => {
    const defaultColor = "black"
    const defaultLineThickness = 1

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const lineThicknessRef = useRef<HTMLSelectElement>(null)
    const [lineColor, setLineColor] = useState<string>(defaultColor)
    const [lineThickness, setLineThickness] = useState<number>(defaultLineThickness)
    const [Black, blackClick$] = useColor("black")
    const [Gray, grayClick$] = useColor("darkgray")
    const [DarkRed, darkRedClick$] = useColor("darkred")
    const [Red, redClick$] = useColor("red")
    const [Orange, orangeClick$] = useColor("orange")
    const [Yellow, yellowClick$] = useColor("yellow")
    const [Green, greenClick$] = useColor("green")
    const [Turquoise, TurquoiseClick$] = useColor("turquoise")
    const [Blue, blueClick$] = useColor("blue")
    const [Purple, purpleClick$] = useColor("purple")
    const [White, whiteClick$] = useColor("white")
    const [LightGray, lightGrayClick$] = useColor("lightgray")
    const [Brown, brownClick$] = useColor("saddlebrown")
    const [Pink, pinkClick$] = useColor("pink")
    const [Gold, goldClick$] = useColor("gold")
    const [LightYellow, lightYellowClick$] = useColor("lightgoldenrodyellow")
    const [LightGreen, lightGreenClick$] = useColor("lightgreen")
    const [LightTurquoise, lightTurquoiseClick$] = useColor("paleturquoise")
    const [SlateGray, slateGrayClick$] = useColor("slategray")
    const [LavenderGray, lavenderClick$] = useColor("lavender")

    useEffect(() => {
        const ctx = canvasRef.current!
        const canvas = ctx.getContext("2d")!
        const rect = ctx.getBoundingClientRect()
        const scaleX = ctx.width / rect.width
        const scaleY = ctx.height / rect.height

        const mouseDown$ = mouseButtonEvent(ctx, "mousedown", true)
        const mouseUp$ = mouseButtonEvent(ctx, "mouseup", false)
        const mouseMove$ = fromEvent<MouseEvent>(ctx, "mousemove")

        const color$ = merge([
            blackClick$(),
            grayClick$(),
            darkRedClick$(),
            redClick$(),
            orangeClick$(),
            yellowClick$(),
            greenClick$(),
            TurquoiseClick$(),
            blueClick$(),
            purpleClick$(),
            whiteClick$(),
            lightGrayClick$(),
            brownClick$(),
            pinkClick$(),
            goldClick$(),
            lightYellowClick$(),
            lightGreenClick$(),
            lightTurquoiseClick$(),
            slateGrayClick$(),
            lavenderClick$(),
        ]).pipe(
            mergeMap(color => color),
            startWith(lineColor),
            distinctUntilChanged(),
            tap(color => setLineColor(color)),
        )

        const lineThickness$ = fromEvent<ChangeEvent<HTMLSelectElement>>(lineThicknessRef.current!, "change")
            .pipe(
                map(event => Number(event.target.value)),
                startWith(lineThickness),
            )

        const config$ = combineLatest([color$, lineThickness$])
            .pipe(
                map(([color, thickness]) => ({ color, thickness })),
                tap(() => {
                    canvas.closePath()
                    canvas.beginPath()
                }),
            )

        const paintSubscription = mouseMove$
            .pipe(
                map(event => ({
                    x: (event.clientX - rect.left) * scaleX,
                    y: (event.clientY - rect.top) * scaleY,
                })),
                bufferCount(2, 1),
                map(([prevCoord, coord]) => ({ prevCoord, coord })),
                windowToggle(mouseDown$, () => mouseUp$),
                mergeMap(coords => coords),
                withLatestFrom(config$, (coords, config) => ({ ...coords, ...config })),
            )
            .subscribe({
                next: paint(canvas),
                error: console.error,
                complete: () => console.log("COMPLETED PAINT!"),
            })

        return function cleanup() {
            if (paintSubscription && !paintSubscription.closed) {
                paintSubscription.unsubscribe()
            }
        }
    })

    return (
        <>
            <div style={{ overflow: "hidden" }}>
                <div style={{ float: "left", marginRight: 10, height: 84, textAlign: "center" }}>
                    <div style={{ padding: "23px 0" }}>
                        <select ref={lineThicknessRef}
                                value={lineThickness}
                                onChange={e => setLineThickness(Number(e.target.value))}>
                            <option value="1">1px</option>
                            <option value="2">2px</option>
                            <option value="3">3px</option>
                            <option value="4">4px</option>
                        </select>
                        <div style={{ marginTop: 2 }}><em>Line thickness</em></div>
                    </div>
                </div>
                <div style={{ float: "left", marginRight: 10 }}>
                    <div id="chosen-color" style={{ background: lineColor }}/>
                </div>
                <div style={{ float: "left" }}>
                    <div className="color-picker">
                        <Black/>
                        <Gray/>
                        <DarkRed/>
                        <Red/>
                        <Orange/>
                        <Yellow/>
                        <Green/>
                        <Turquoise/>
                        <Blue/>
                        <Purple/>
                    </div>
                    <div className="color-picker">
                        <White/>
                        <LightGray/>
                        <Brown/>
                        <Pink/>
                        <Gold/>
                        <LightYellow/>
                        <LightGreen/>
                        <LightTurquoise/>
                        <SlateGray/>
                        <LavenderGray/>
                    </div>
                </div>
            </div>
            <canvas ref={canvasRef} id="canvas" height={600} width={1000}/>
        </>
    )
}

export default Canvas
