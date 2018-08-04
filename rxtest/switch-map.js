var Rx = require('rxjs/Rx');

Rx.Observable
    .interval(2000)
    .do(next => console.log('starting new'))
    .take(3).switchMap(x => Rx.Observable
        .interval(1000).take(10).map(data=>[x,data])).subscribe({
            next(data) {
                console.log(data);
            }
        });
