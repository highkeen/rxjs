var Rx = require('rxjs/Rx');

Rx.Observable.interval(100).take(15).bufferCount(10).subscribe({
    next(data) {
        console.log(data);
    }
});