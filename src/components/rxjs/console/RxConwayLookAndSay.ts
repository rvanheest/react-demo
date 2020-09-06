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
        scan((state, num) => state.value === num ? incrementCount(state) : emptyState(num), emptyState(0)),
        bufferCount(2, 1),
        filter(states => states.length == 1 || states[0].value !== states[1].value),
        mergeMap(states => of(states[0].count, states[0].value)),
    )
}

export default function conwayLookAndSay(): Observable<string> {
    return of(1).pipe(
        repeat(),
        scan(next, of(1)),
        startWith(of(1)),
        mergeMap(line => line.pipe(reduce((acc, value) => acc + value, ""))),
        take(10),
    )
}
