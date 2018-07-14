const Rx = require('rxjs/rx');
const request = require('request');
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

function fetchData() {
    return new Promise((resolve, reject) => {
        request('https://jsonplaceholder.typicode.com/posts/1', { json: true }, (err, res, body) => {
            if (err) { 
                reject(JSON.stringify(err)); 
            }
            else {
                resolve(res.headers.date);
            }
        });
    });
}

var ob = Rx.Observable.fromPromise(fetchData());

ob.subscribe(subscription('sub1'));

setTimeout(() => {
    ob.subscribe(subscription('sub2'));
}, 1000);







