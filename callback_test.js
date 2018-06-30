
function mockAsyncData(c){
    var x;
    setTimeout(()=>{
        x=100;
        c(x);
    },1000);

    return x;
}
/**callback **/
mockAsyncData(data=>console.log(data));

//**Nested call back**/
mockAsyncData(data=>{
    console.log(data);
    mockAsyncData(data=>console.log(data));
});
 //console.log(r);




