/*
    JS由于本身语言缺陷，所以很多概念性的东西都是伪概念，

*/

//喝茶：烧水（3）、洗杯子（2）、茶叶（1）= 6


var boilWater = function(){//烧水
    //有三个状态，只有两个回调
    return new Promise(function(resolve,reject){//resolve：成功，reject：失败
        setTimeout(function(){
            console.log("boilWater");
            resolve("boilWater");
        },3000);
    });
}



var washGlass = function(){//洗杯子
    //有三个状态，只有两个回调
    return new Promise(function(resolve,reject){//resolve：成功，reject：失败
        setTimeout(function(){
            console.log("washGlass");
            resolve("washGlass");
        },3000);
    });
}



var prepareTealeaves = function(){//烧水
    //有三个状态，只有两个回调
    return new Promise(function(resolve,reject){//resolve：成功，reject：失败
        setTimeout(function(){
            console.log("prepareTealeaves");
            resolve("prepareTealeaves");
        },1000);
        
    });
}

console.time("promiseAsync");
/*
    这里就相当于一个跑步比赛，不是那个先跑就先到终点
    最后的then表示最后一名选手成功到达终点

*/
Promise.all([boilWater(),washGlass(),prepareTealeaves()]).then(function(result){
    console.timeEnd("promiseAsync");
});



























