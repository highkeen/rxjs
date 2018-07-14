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

var ob = Rx.Observable.from([10,20,30]);

ob.subscribe(subscription('sub1'));
setTimeout(() => {
    ob.subscribe(subscription('sub2'));    
}, 1000);







