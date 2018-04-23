var $=require("jquery")
module.exports = function () {
$(".data-title-home").find("span").on("click",function () {
	$(this).addClass("active")
	$(this).siblings("span").removeClass("active")
})
	var tel=sessionStorage.getItem("u_tel")
	$.ajax({
		url: "http://localhost:8888/login/verification",
		type: "get",
		data: {
			tel
		}
	}).then((res) => {
		var res1=JSON.parse(res)
		$(".user-icon").find("img").attr("src",res1[0].u_img)
		$(".user-name").find("span").eq(0).text(res1[0].u_name)
		$(".user-des").text(res1[0].u_xinxi)
	})
}