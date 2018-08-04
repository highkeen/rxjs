var Rx = require('rxjs/Rx');

var ob=Rx.Observable.of(Date.now()).share();

//ob.connect();

function subscriber(name){
    return {
        next:(data)=>console.log(`${name} ${data}`),
        error:(e)=>console.log(`${name} ${e}`)
    };
    
}


ob.subscribe(subscriber('sb1'));
setTimeout(() => {
    ob.subscribe(subscriber('sb2'));    
}, 1000);
//ob.connect();