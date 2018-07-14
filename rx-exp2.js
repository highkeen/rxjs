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

function source(observer){
    console.log('Initilized...');
    observer.next(Date.now());
};

var ob = Rx.Observable.create(source);

ob.subscribe(subscription('sub1'));
setTimeout(() => {
    ob.subscribe(subscription('sub2'));    
}, 1000);







