var $=require("jquery")
module.exports = function () {
$(".data-title-home").find("span").on("click",function () {
	$(this).addClass("active")
	$(this).siblings("span").removeClass("active")
})

}