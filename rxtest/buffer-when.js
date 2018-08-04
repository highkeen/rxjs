var Rx = require('rxjs/Rx');

Rx.Observable.interval(100).take(15)
.bufferWhen(()=>Rx.Observable.of(10).delay(2000)).subscribe({
    next(data) {
        console.log(data);
    }
});