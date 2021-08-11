window.addEventListener("load",function(){
	let firstPage = document.querySelector(".firstPage");
	let secondPage = document.querySelector(".secondPage");
	let gSelf = document.querySelector(".gSelf");
	//第二页位置大小设置
	secondPage.style.top = "-" + firstPage.offsetHeight + "px";
	secondPage.style.height = firstPage.offsetHeight + "px";
	gSelf.addEventListener("click",function(){
		myAnimate(".secondPage", "0", "top", "top .5s");
	})
	//css3动画封装
	function myAnimate(animateNode, animateEnd, animateStyle, animateTransition) {
		document.querySelector(animateNode).style.transition = animateTransition;
		document.querySelector(animateNode).style[animateStyle] = animateEnd;
	}
})