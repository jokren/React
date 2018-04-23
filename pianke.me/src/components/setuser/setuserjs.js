var $=require("jquery")
module.exports = function () {
	$(".voteImg").on("click",function () {
		$(".votedImg").hide()
		$(".voteImg").show()
		$(this).hide().siblings(".votedImg").show()
		sessionStorage.setItem("u_sex",$(".voteImg").index(this)+1)
	})
	
	//加载渲染信息
	if(sessionStorage.getItem("u_tel")){
		var tel=sessionStorage.getItem("u_tel")
		$.ajax({
			url: "http://localhost:8888/login/verification",
			type: "get",
			data: {
				tel
			}
		}).then((res) => {
			var res1=JSON.parse(res)[0]
			console.log(res1);
			$(".set-icon").find("img").attr("src",res1.u_img)
			$(".set-name").find("input").val(res1.u_name)
			$(".set-tel").find("span").eq(1).text(res1.u_tel)
			if(res1.u_sex==2){
				$(".votedImg").eq(0).hide()
				$(".voteImg").eq(0).show()
				$(".votedImg").eq(1).show()
				$(".voteImg").eq(1).hide()
				sessionStorage.setItem("u_sex",2)
			}else {
				sessionStorage.setItem("u_sex",1)
			}
			$(".set-des").find("textarea").val(res1.u_xinxi)
		})
	}
	
	$(".change-icon").find("input").on("click",function () {
		$(this).siblings("input").show()
	})
	$(".set-btn").on("click",function () {
		$.ajax({
			url: 'http://localhost:8888/setuser/getimg',
			type: 'POST',
			cache: false, //不必须
			data: new FormData($('.am-form')[0]),
			processData: false,
			contentType: false,
			success: function (data) {
				console.log(data)
				var img="http://localhost:8888/" + data
				$(".set-icon").find("img").attr("src", "http://localhost:8888/" + data)
				sessionStorage.setItem("u_img",img)
				console.log("上传成功");
				$.ajax({
					url: 'http://localhost:8888/setuser/set',
					type: 'POST',
					data: {
						img:$(".set-icon").find("img").attr("src"),
						name:$(".set-name").find("input").val(),
						oldtel:sessionStorage.getItem("u_tel"),
						newtel:$(".set-tel").find("span").eq(1).text(),
						sex:sessionStorage.getItem("u_sex"),
						xinxi:$(".set-des").find("textarea").val()
					},
					success: function (res) {
						 sessionStorage.setItem("u_tel",$(".set-tel").find("span").eq(1).text()),
						sessionStorage.setItem("u_name",$(".set-name").find("input").val()),
						alert(res)
					}
				})
			}
		})
	})
}