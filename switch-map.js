const Rx = require('rxjs/rx');
function subscription(name) {
    return {
        next(data) {
            console.log(`${name} => ${data} `)
        },
        error(e) {
            console.log(`${name} => ${e} `)
        },
        complete() {
            console.log(`${name} completed`)
        }
    };
}



var ob=Rx.Observable.interval(2000)
.take(2)
.switchMap((i)=>{
    return Rx.Observable.interval(2000).take(10).map(x=> [i,x]);
});


ob.subscribe(subscription('sub1'));

//ob.subscribe(subscription('sub2'));







