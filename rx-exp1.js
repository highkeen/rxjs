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


var ob = Rx.Observable.create((observer) => {
    console.log('Initilized...');
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
});

ob.subscribe(subscription('sub1'));
ob.subscribe(subscription('sub2'));






