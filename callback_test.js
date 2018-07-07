
function mockAsyncData(c){
    var x;
    setTimeout(()=>{
        x=100;
        c(x); /** calling the callback **/
    },1000);
}
/**callback **/
mockAsyncData(data=>console.log(data));

//**Nested call back**/
mockAsyncData(data=>{
    console.log(data);
    mockAsyncData(data=>console.log(data));
});




