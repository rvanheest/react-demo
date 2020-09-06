import { Observable, of } from "rxjs"

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
    // TODO implement
    return of(1)
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
        // TODO implement
    )
}
