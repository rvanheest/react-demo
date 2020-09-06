import { Observable, of } from "rxjs"
import { bufferCount, endWith, filter, map, mergeMap, reduce, repeat, scan, startWith, take } from "rxjs/operators"

function row(prevRow: Observable<number>): Observable<number> {
    return prevRow.pipe(
        bufferCount(2, 1),
        filter(arr => arr.length == 2),
        map(([x, y]) => x + y),
        startWith(1),
        endWith(1),
    )
}

export default function pascal(): Observable<string> {
    return of(1).pipe(
        repeat(),
        scan(row, of(1)),
        startWith(of(1)),
        mergeMap(line => line.pipe(reduce((acc, value) => `${acc} ${value}`, ""))),
        take(10),
    )
}
