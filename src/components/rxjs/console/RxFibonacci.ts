import { Observable, of } from "rxjs"
import { bufferCount, filter, map, repeat, scan, skip, startWith } from "rxjs/operators"

/**
 * Generates a stream of values that are the numbers in the Fibonacci sequence.
 *
 * The Fibonacci sequence is defined as
 *
 * fib 0 = 0
 * fib 1 = 1
 * fib n = fib (n - 1) + fib (n - 2)
 *
 * @return An Observable stream containing the numbers in the Fibonacci sequence
 */
export function fibonacci(): Observable<number> {
    return of(1).pipe(
        repeat(),
        scan(([x, y]) => [y, x + y], [0, 1]),
        map(([, y]) => y),
        startWith(0, 1),
    )
}

/**
 * Generates a stream of approximations for the Golden Ratio, based on the Fibonacci sequence.
 *
 * The Golden Ratio can be defined as
 *
 * golden_ratio 0 = 1
 * golden_ratio 1 = 1
 * golden_ratio n = fib (n) / fib (n - 1)
 *
 * @return An Observbale stream containing approximations for the Golden Ratio
 */
export function goldenRatio(): Observable<number> {
    return fibonacci().pipe(
        bufferCount(2, 1),
        filter(xs => xs.length == 2),
        skip(1),
        map(([x, y]) => y / x),
    )
}
