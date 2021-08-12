window.addEventListener("load",function(){
	let firstPage = document.querySelector(".firstPage");
	let secondPage = document.querySelector(".secondPage");
	let gSelf = document.querySelector(".gSelf");
	let leftBtn = document.querySelector(".left_btn");
	//第二页位置大小设置
	secondPage.style.top = - firstPage.offsetHeight + "px";
	secondPage.style.height = firstPage.offsetHeight + "px";
	//个人信息
	document.querySelector("#personal_information").addEventListener("click",function(){
		gIframe("personal_information.html","个人信息");
	})
	//修改密码
	document.querySelector("#change_password").addEventListener("click",function(){
		gIframe("change_password.html","修改密码");
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
	//iframe事件封装
	function gIframe(iframeUrl,iframeName){
		secondPage.src = iframeUrl;
		myAnimate(".secondPage", "0", "top", "top .3s");
		myAnimate(".secondPage_head", "0", "top", "top .4s");
		document.querySelector(".page_name").innerText = iframeName;
	}
})