(function(win,factory){

	win.Template = factory;

})(this,function(options){//options就是传入的对象
	//匹配指定的字符：A:<% ... %>  B:<%= %>
	var matcher = /<%=([\s\S]+?)%>|<%([\s\S]+?)%>|$/g;//这个正则不是去匹配，而是根据正则替换
	var el = document.getElementById(options.el);//获取渲染的位置
	var tem = document.getElementById(options.tem).innerHTML;//获取模板
	var data = options.data;//获取数据

	var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;//特殊字符列表
	//空格：$nbsp;  &glt;....  
	var escapers = {//匹配需要匹配的字段，替换为指定的字段
		"'":"'",
		"\\":"\\",
		"\r":"r",
		"\n":"n",
		"\t":"t",
		"\u2028":"u2028",
		"\u2029":"u2029"
	}

	//SSR攻击：传入一些特殊的字符，以混淆JS，传入进来，导致程序错误或者出现Bug
	var template = function(text,data){//处理业务逻辑
		/*
			由于语法特殊，如果单纯的通过if或者其他判断，肯定不能达到理想的效果
			就需要根据已有的模板字符来动态创建方法

		 */
		var index = 0;
		var function_body = "var dataHtml = '';";//动态生成的方法
		function_body += "dataHtml += '";
		text.replace(matcher,function(match,interlpolate,evaluate,offset){
			/*
				match：被匹配的模板字符
				interlpolate：已经替换的字符
				evaluate：已经替换的字符
				offset：被替换字符的下标位置，记录的匹配的字符位置

				指定字符串的位置：text.slice(起始位置，结束位置)
			 */
			console.log("循环");
			function_body += text.slice(index,offset)
				.replace(escaper,function(match){
					return '\\' + escapers[match];//因为没有指定的字符
			});

			if(evaluate){
				//for循环以内，依然需要+=
				function_body += "';" + evaluate + "dataHtml += '";
			}
			if(interlpolate){
				function_body += "' + " + interlpolate + " + '";
			}
			index = offset + match.length;//已有的长度+字符的长度 = 下一个的长度
			return match;
		});

		function_body += "';return dataHtml";
		//此时render已经是一个动态的方法了
		console.log(function_body);
		//function  Function
		var render = new Function('obj',function_body);//通过new Functionn得到一个通过字符串生成的动态方法
		return render(data);

	}
	console.log(template(tem,data));
	el.innerHTML = template(tem,data);//渲染结果



});