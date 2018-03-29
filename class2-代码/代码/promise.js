/*
    JS由于本身语言缺陷，所以很多概念性的东西都是伪概念，
    ajax跨域（实际上根本不是用的ajax）
    JS继承（用的JS技术手段）

*/
/*

function test(fn){
    setTimeout(function(){
        console.log("11111");
		fn();   
});
}
test(function(){
	console.log("22222");
});

*/

//喝茶：烧水（3）、洗杯子（2）、茶叶（1）= 6


var boilWater = function(){//烧水
    //有三个状态，只有两个回调
    return new Promise(function(resolve,reject){//resolve：成功，reject：失败
        setTimeout(function(){
            resolve("boilWater");
        },3000);
    });
}


var washGlass = function(){//洗杯子
    //有三个状态，只有两个回调
    return new Promise(function(resolve,reject){//resolve：成功，reject：失败
        setTimeout(function(){
            resolve("washGlass");
        },2000);
    });
}

var prepareTealeaves = function(){//烧水
    //有三个状态，只有两个回调
    return new Promise(function(resolve,reject){//resolve：成功，reject：失败
        setTimeout(function(){
            resolve("prepareTealeaves");
        },1000);
        
    });
}

console.time("promise");
var arr = [];

//promise这里使用的是链式调用
boilWater().then(function(boilWater){
    console.log(boilWater);
    arr.push(boilWater);
    return washGlass();
}).then(function(washGlass){
    console.log(washGlass);
    arr.push(washGlass);
    return prepareTealeaves();
}).then(function(tealeaves){
    arr.push(tealeaves);
    console.log(arr);
}).catch(function(){
    console.log("Hi");
    
    console.timeEnd("promise");
});





























