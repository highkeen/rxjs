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


var ob=Rx.Observable.interval(1000)
.take(5)
.mergeMap((i)=>{
    console.log('create new');
    return Rx.Observable.fromPromise(fetchData()).map(x=> [x,i]);
});


ob.subscribe(subscription('sub1'));

ob.subscribe(subscription('sub2'));







