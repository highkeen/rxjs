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

var ob = Rx.Observable.from(['item1','item2','item3']);

ob
.mergeMap(item=>{
    return Rx.Observable.interval(1000).take(3).map(i=>[item,i]);
})
.subscribe(subscription('sub1'));








