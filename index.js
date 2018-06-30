const Rx=require('rxjs/Rx');

//Rx.Observable.from([10,20])
Rx.Observable.interval(1000).take(5)
//.concat(Rx.Observable.interval(1000).take(5))
//.merge(Rx.Observable.interval(500).map(i=> i*2).take(5))
.mergeMap(data=> Rx.Observable.of(data))
.subscribe({
    next(data){
        console.log(`${data}`);
    }
})