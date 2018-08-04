var Rx = require('rxjs/Rx');

var ob=Rx.Observable.create(observer=>{
    console.log('Init');
    observer.next(Date.now());
    observer.complete();
});


function subscriber(name){
    return {
        next:(data)=>console.log(`${name} ${data}`),
        error:(e)=>console.log(`${name} ${e}`),
        complete:()=>console.log(`completed ${name}`)
    };
    
}


ob.subscribe(subscriber('sb1'));
setTimeout(() => {
    ob.subscribe(subscriber('sb2'));    
}, 1000);
