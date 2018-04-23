
module.exports= function  () {
	var oAll = document.getElementById('luntan-all')
var oUl = oAll.children[0].children[0]
var oOl = oAll.children[0].children[1]
//先克隆
var width=oUl.children[0].offsetWidth
console.log(width);

//创建动态轮播函数
var imgIndexx = 0
var dianindexx = 0

function autoplay(){
	imgIndexx++
	if(imgIndexx > 2){
		imgIndexx = 1  //
		oUl.style.left = "0px"
	}
	animate1(oUl, -width * imgIndexx)
	//点的背景颜色跟着轮播
	dianindexx++
	//排他
	if(dianindexx == 3){
		dianindexx = 0
	}
	for(var i = 0; i < oOl.children.length; i++){
		oOl.children[i].className = ""
	}
	oOl.children[dianindexx].className = "current"
	
}

//开始播放
var timer = setInterval(function(){
	autoplay()
}, 3000)
//移上去暂停


function animate1(obj,target){
    clearInterval(obj.timer)
    var teps=obj.offsetLeft>target?-10:10
    obj.timer=setInterval(function(){
      obj.style.left=obj.offsetLeft+teps+"px"
        if(Math.abs(obj.offsetLeft-target)<=Math.abs(teps)){
            clearInterval(obj.timer)
            obj.style.left=target+"px"
        }
    },0)
}
}