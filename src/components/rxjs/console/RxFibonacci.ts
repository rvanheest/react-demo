import { Observable, of } from "rxjs"
import { map, repeat, scan, startWith, take } from "rxjs/operators"

export default function fibonacci(): Observable<number> {
    return of(1).pipe(
        repeat(),
        scan(([x, y]) => [y, x + y], [0, 1]),
        map(([,y]) => y),
        startWith(0, 1),
        take(20),
    )
}
