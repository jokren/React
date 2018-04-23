var $=require("jquery")
module.exports = function () {
      $(".set-title").text(sessionStorage.getItem("title"))
	if(sessionStorage.getItem("title")=="忘记密码"){
		$(".btn").text("发送验证")
		$(".login-input").find(".change").eq(0).attr("placeholder","请输入手机号")
		$(".login-input").find(".change").eq(0).show().siblings("input").css("display","none")
	}
	if(sessionStorage.getItem("title")=="更换手机号"){
		$(".btn").text("发送验证")
		$(".login-input").find(".change").eq(0).attr("placeholder","请输入手机号")
		$(".login-input").find(".change").eq(0).show().siblings("input").css("display","none")
	}
	if(sessionStorage.getItem("title")=="修改密码") {
		$(".btn").text("修改")
		$(".login-input").find(".change").show()
		$(".login-input").find(".change").eq(0).attr("placeholder", "输入旧密码")
		$(".btn").on("click",function () {
			var pwd1 = $(".login-input").find(".change").eq(1).val()
			var pwd2 = $(".login-input").find(".change").eq(2).val()
			if (pwd1 == pwd2) {
			$.ajax({
				url: 'http://localhost:8888/change',
				type: 'POST',
				data: {
					tel: sessionStorage.getItem("u_tel"),
					oldpwd: $(".login-input").find(".change").eq(0).val(),
					newpwd: $(".login-input").find(".change").eq(1).val()
				},
				success: function (res) {
						alert(res)
				}
			})
		}else {
			alert("请输入相同的密码")
		}
		})
	}
}