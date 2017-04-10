'use strict'
/*窗口加载完执行一段程序*/
window.onload=function(){
	var designWidth = 1080;/*定义设计尺寸*/
	function fontSize(){
		var CW = document.documentElement.clientWidth;
		console.log(CW);
			var size = CW/designWidth*100+"px";
			document.querySelector("html").style.fontSize=size;/*设置html的fontsize*/
//		document.querySelector(".box").style.width=size;
		console.log(size);
	}
	fontSize();
	window.onresize = fontSize;/*检测窗口尺寸是否发生变化*/
}
