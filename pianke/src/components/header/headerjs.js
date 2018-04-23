var $=require("jquery")
module.exports = function () {
	$(".head").find(".navbar li a").on("click",function () {
		$(this).parent("li").addClass("active").siblings("li").removeClass("active")
	})
	$(".userinfo").on("mouseenter",function () {
		console.log($(".userinfo").find(".drop-menu"))
		$(".userinfo").find(".drop-menu").show()
	}).on("mouseleave",function () {
		$(".userinfo").find(".drop-menu").hide()
	})
	$(".massage").on("mouseenter",function () {
		$(".massage").find(".drop-menu").css("display","block")
	}).on("mouseleave",function () {
		$(".massage").find(".drop-menu").css("display","none")
	})
	$(".drop-menu").on("mouseenter",function () {
		$(this).css("display","block")
	}).on("mouseleave",function () {
		$(this).css("display","none")
	})
	$(window).on("scroll",function () {
		if($(document).scrollTop()>=150){
			$("header").slideUp(500)
		}
		if($(document).scrollTop()<=150){
			$("header").slideDown(500)
		}
		if($(document).scrollTop()<=700){
			$(".back-top").hide()
		}
		if($(document).scrollTop()>=700){
			$(".back-top").show()
		}
	})
	$(".back-top").on("click",function () {
		$(document).scrollTop(0)
	})
	$(".gologin").on("click",function () {
		$(".login").show()
		$("body").css("overflow","hidden")
	})
	// 验证是否有用户登录
	if(sessionStorage.getItem("u_tel")){
		var tel=sessionStorage.getItem("u_tel")
		$.ajax({
			url: "http://localhost:8888/login/verification",
			type: "get",
			data: {
				tel
			}
		}).then((res) => {
			if(res!="未登录"){
				$(".login-btn").eq(0).addClass("hidden")
				$(".userinfo").removeClass("hidden")
				$(".massage").removeClass("hidden")
				$(".userinfo").find("img").attr("src",sessionStorage.getItem("u_img"))
			}
		})
	}
	$(".outlogin").on("click",function () {
		$.ajax({
			url: "http://localhost:8888/login/outlogin",
			type: "get",
			data:{
				tel
			}
		}).then((res) => {
			console.log(res);
			if(res=="已退出"){
				sessionStorage.setItem("u_img","")
				sessionStorage.setItem("u_tel","")
				sessionStorage.setItem("u_name","")
				$(".login-btn").eq(0).removeClass("hidden")
				$(".userinfo").addClass("hidden")
				$(".massage").addClass("hidden")
			}
		})
	})
}
