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

var ob = Rx.Observable.interval(1000).map(i=> `External ${i}`).take(5);

ob
.concat(Rx.Observable.interval(500).map(i=> `internal ${i}`).take(3))
.subscribe(subscription('sub1'));








