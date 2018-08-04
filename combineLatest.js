var Rx = require('rxjs/Rx');

var ob1=Rx.Observable.interval(1000).take(3);
//var ob1=Rx.Observable.of('a','b','c','d','e');
var ob2=Rx.Observable.of(40,50);

Rx.Observable.combineLatest(ob1,ob2).subscribe({
    next(data) {
        console.log(data);
    }
})