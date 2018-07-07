function mockAsyncData() {
    return new Promise((resolve, reject) => {
        var x;
        setTimeout(() => {
            x = 100;
            resolve(x);
            //reject('error');
        }, 1000);
    });
}


function mockAsyncData2() {
    return new Promise((resolve, reject) => {
        var x;
        setTimeout(() => {
            x = 'samik';
            resolve(x);
            //reject('error');
        }, 1000);
    });
}


mockAsyncData().then(x=>{
    console.log(x);
    return mockAsyncData2();
})
.then(x=>console.log(`next data ${x}`))
.catch(error=>console.log(`Error ${error}`));

Promise.all(mockAsyncData,mockAsyncData2).then(res=>{
    console.log(res);
})


 
