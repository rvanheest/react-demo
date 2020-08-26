import { Observable, of } from "rxjs"
import { bufferCount, filter, mergeMap, reduce, repeat, scan, startWith, take } from "rxjs/operators"

interface State {
    value: number
    count: number
}

function incrementCount(state: State): State {
    return { ...state, count: state.count + 1 }
}

function emptyState(value: number): State {
    return { value, count: 1 }
}

function next(nums: Observable<number>): Observable<number> {
    return nums.pipe(
        scan((acc, value) => acc.value === value ? incrementCount(acc) : emptyState(value), emptyState(0)),
        bufferCount(2, 1),
        filter(value => value.length == 1 || value[0].value !== value[1].value),
        mergeMap(value => of(value[0].count, value[0].value)),
    )
}

export default function conwayLookAndSay(): Observable<string> {
    return of(1).pipe(
        repeat(),
        scan(next, of(1)),
        startWith(of(1)),
        take(10),
        mergeMap(seq => seq.pipe(reduce((acc, value) => acc + value, ""))),
    )
}
