window.addEventListener("load",function(){
	let firstPage = document.querySelector(".firstPage");
	let secondPage = document.querySelector(".secondPage");
	let personalInformation = document.querySelector("#personal_information");
	let gSelf = document.querySelector(".gSelf");
	let leftBtn = document.querySelector(".left_btn");
	let pageName = document.querySelector(".page_name");
	//第二页位置大小设置
	secondPage.style.top = - firstPage.offsetHeight + "px";
	secondPage.style.height = firstPage.offsetHeight + "px";
	personalInformation.addEventListener("click",function(){
		secondPage.src = "personal_information.html"
		myAnimate(".secondPage", "0", "top", "top .3s");
		myAnimate(".secondPage_head", "0", "top", "top .4s");
		pageName.innerText = "个人信息";
	})
	leftBtn.addEventListener("click",function(){
		myAnimate(".secondPage", - firstPage.offsetHeight + "px", "top", "top .3s");
		myAnimate(".secondPage_head", "-56px", "top", "top .4s");
	})
	//css3动画封装
	function myAnimate(animateNode, animateEnd, animateStyle, animateTransition) {
		document.querySelector(animateNode).style.transition = animateTransition;
		document.querySelector(animateNode).style[animateStyle] = animateEnd;
	}
})