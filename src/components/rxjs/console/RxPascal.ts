import { Observable, of } from "rxjs"
import { bufferCount, endWith, filter, map, mergeMap, reduce, repeat, scan, startWith, take } from "rxjs/operators"

/**
 * Computes the numbers in the next row of Pascal's Triangle, given the numbers in the previous row.
 * For example: if the previous row contains the numbers <1 3 3 1>, then this function should return a stream containing
 * the numbers <1 4 6 4 1>.
 *
 * @param prevRow The stream containing the previous row of numbers in Pascal's Triangle
 * @return An Observable stream containing the next row of number in Pascal's Triangle
 */
function row(prevRow: Observable<number>): Observable<number> {
    return prevRow.pipe(
        bufferCount(2, 1),
        filter(arr => arr.length == 2),
        map(([x, y]) => x + y),
        startWith(1),
        endWith(1),
    )
}

/**
 * Generates a stream of strings containing the rows of Pascal's Triangle. Each element in the stream is the next row
 * in the Triangle, formatted as shown below.
 *
 *   1
 *   1 1
 *   1 2 1
 *   1 3 3 1
 *   1 4 6 4 1
 *   1 5 10 10 5 1
 *   1 6 15 20 15 6 1
 *   ...
 *
 *  @return An Observable stream containing the first 10 rows of numbers in Pascal's Triangle
 */
export default function pascal(): Observable<string> {
    return of(1).pipe(
        repeat(),
        scan(row, of(1)),
        startWith(of(1)),
        mergeMap(line => line.pipe(reduce((acc, value) => `${acc} ${value}`, ""))),
        take(10),
    )
}
