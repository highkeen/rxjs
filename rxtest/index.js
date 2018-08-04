var Rx = require('rxjs/Rx');

Rx.Observable
    .interval(1000)
    .take(3)
    .map(x => x * 2)
    //.debounceTime(500)
    // .throttleTime(1000)
    //.merge(Rx.Observable.of('a','s','d'))
    .concat(Rx.Observable.of('a', 's', 'd'))
    .subscribe({
        next(data) {
            console.log(data);
        }
    })
