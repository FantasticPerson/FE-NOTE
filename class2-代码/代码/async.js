/*
  号称终极异步解决方案
  Promise已经解决了回调地狱的问题，换句话说，异步基本已经没什么大的问题
    1、可读性
    2、太麻烦
    3、代码太多

    

*/


var sleep = function(time){
    return new Promise(function(resolve,reject){
        console.log("中间位置");
        setTimeout(function(){
            setTimeout(function(){
                console.log("延迟第二次");
                resolve();
            },time);
        },time);
    });
}


var sleep2 = function(time){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("中间2位置");
            resolve();
        },time);
    });
}

//async:给方法一个标识，告诉他这是一个需要异步的函数
var start = async function(){
    console.log("start loading......");
    await sleep(3000);//这里会等待方法执行完成之后才往下走
    //await sleep2(2000);//这里会等待方法执行完成之后才往下走
    console.log("end loading......");


}

start();



















