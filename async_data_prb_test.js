
function mockAsyncData(){
    var x;
    setTimeout(()=>{
        x=100;
    },1000);

    return x;
}
var r=mockAsyncData();
console.log(r);




