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


var arr = [1,2,3,4,5,6,7,8,9,0];

//这里不能使用forEach循环，只能用for循环
var start = async function(){
    for(var i = 0;i < arr.length;i++){
        await sleep(2000);
        console.log("hi"+arr[i]);
    }
}





