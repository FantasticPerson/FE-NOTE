(function(global,factory){

    global.VueRouter = factory();//通过全局导出局部对象

})(this,function(){//this:window
    //这里就是我们插件的主体


    var VueRouter = function(){

    }

    VueRouter.prototype = {
        push:function(){

        },
        add:function(){

        }
    }
    
    var MyLink = {

    }

    Vue.component('my-link', MyLink)


    return VueRouter;
});









