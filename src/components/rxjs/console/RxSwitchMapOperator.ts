import { EMPTY, Observable, of, range, throwError } from "rxjs"
import { catchError, switchMap, tap } from "rxjs/operators"

export default function mergeMapDemo(): Observable<number> {
    return range(0, 10).pipe(
        switchMap(i => {
            return (i > 4 && i < 7 ? throwError(new Error(`ERRRRROOOOORRRR: i = ${i}`)) : of(i))
                .pipe(
                    tap({ error: err => console.error(err) }),
                    catchError(() => EMPTY),
                )
        })
    )
}
