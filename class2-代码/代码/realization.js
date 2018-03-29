/*
    我们提供resolve、reject对象，管理异步
*/

function MyPromise(fn){//这里的fn是用户方法里面传入的匿名函数
    var callback = null;
    this.then = function(cb){
        callback = cb;//callback就拿到了用户传入的匿名函数
        //console.log("then method loading...");
    }
    //链式调用一定记得绑定在对象下，也就是this下
    function resolve(value){
        setTimeout(function(){
            callback(value);
        },0);
    }
    fn(resolve);//他执行的我们这里“MyPromise”的传入参数
}














