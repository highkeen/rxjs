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

var ob = Rx.Observable.interval(1000).take(5);

ob.subscribe(subscription('sub1'));







