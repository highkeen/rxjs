function mockAsyncData() {
    return new Promise((resolve, reject) => {
        console.log('executed...');
        var x;
        setTimeout(() => {
            x = 100;
            resolve(x);
            //reject('error');
        }, 1000);
    });
}



var response= mockAsyncData();
/*response.then(x=>console.log(x));
response.then(x=>console.log(x));*/

setInterval(()=>{
    response.then(x=>console.log(x));
},1000);



 
