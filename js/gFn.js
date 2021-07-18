window.addEventListener("load",function(){
	//个人信息盒子
	let gSelf = document.querySelector(".gSelf");
	//返回按钮
	let backBtn = document.querySelector(".backBtn");
	gSelf.addEventListener("click",function(){
		myAnimate(".gBody","1216px","width","width .3s");
		myAnimate(".secondPage","616px","left","left .3s");
	});
	backBtn.addEventListener("click",function(){
		myAnimate(".gBody","600px","width","width .3s");
		myAnimate(".secondPage","0","left","left .3s");
	});
	
	
	
	
	//css3动画封装
	function myAnimate(animateNode, animateEnd,animateStyle, animateTransition) {
		document.querySelector(animateNode).style.transition = animateTransition;
		document.querySelector(animateNode).style[animateStyle] = animateEnd;
	}
})