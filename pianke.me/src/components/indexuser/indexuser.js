import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import "./indexuser.css"
import  $ from  "jquery"

class introduce extends Component {
    constructor(props){
        super(props)
        this.state = {
            style1:{
                display:"none"
            },
			stybool:true,
            obj:{},
            arr : [{
                src1 : "http://hpimg.pianke.com/44f3b0492213db58c75c5ad5a790db5920180301.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "其实我一个朋友也没有。",
                username : "半岛玫瑰", type : "Ting", play : 31.1,
                comment : 344, like : "1.2k",
                src2 : "http://hpimg.pianke.com/86dc2848b247c367e417cad43d7b648520170220.png?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/13ecdf92e918808102efcb0530c66bc720180301.jpeg?imageView2/2/w/640/format/jpg",
                cardtitle : "拜个晚年——愿你我都活成自己的角儿。",
                username : "许邻", type : "Ting", play : 4.5,
                comment : 5, like : 65,
                src2 : "http://pkicon.image.alimmdn.com/icon/20161003/7f19241ba4367489706f8fa4a43ff967.png@90w_90h_1e_1c_85Q.jpg"
            }, {
                src1 : "http://hpimg.pianke.com/fdacf9abd8726b76d6dd0411e028937e20180301.gif",
                cardtitle : "珍惜眼前人，心中无黄昏",
                username : "NJ文珂", type : "Ting", play : 16.1,
                comment : 18, like : 347,
                src2 : "http://pkicon.image.alimmdn.com/icon/20160907/441717d411c7d384777b04bdf491513a.png@90w_90h_1e_1c_85Q.jpg"
            }, {
                src1 : "http://hpimg.pianke.com/4723449722c5be584e040402fea0d2c420180215.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "Mystery of love(翻唱)",
                username : "洛一德", type : "Ting", play : 8.1,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/001307ec85a47d4f610f78934c5bed6920171226.png?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/f9270fcc93c750a56ff98e51b79e4cba20180211.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "去纽约",
                username : "阿见", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/8b29dc859b74cb196f7b071ab94470d820170126.jpg?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/b322542401096f388cbddee4f97e610b20180128.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "陆深翻唱 - 爱如潮水",
                username : "阿见", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/8b29dc859b74cb196f7b071ab94470d820170126.jpg?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/dfe4dff5130b18e884c0a3a149eb6d4d20171229.png?imageView2/2/w/640/format/jpg",
                cardtitle : "相期以茶02--The Rose",
                username : "阿见", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/8b29dc859b74cb196f7b071ab94470d820170126.jpg?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/342d77f55b703fe2909beca4315e065120180101.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "这是适用一整年的表白指南",
                username : "阿见", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/8b29dc859b74cb196f7b071ab94470d820170126.jpg?imageView2/2/w/90/format/jpg"
            }]
        }
    }
    vFor(arr){
        return arr.map((e, i) =>{
            return <div key={i} className="item">
                <div className="card-top-img">
                    <a>
                        <img src={e.src1} alt=""/> <span></span>
                    </a>
                </div>
                <div className="card-item">
                    <div className="card-ting-title">
                        <a>{e.cardtitle}</a>
                    </div>
                    <div className="user-sign">
                        <a>主播 / {e.username}</a>
                    </div>
                    <div className="card-others">
                        <span className="card-type">
                            <a>{e.type}</a>
                        </span> <span>{e.play} k次播放  |  评论: {e.comment} |  喜欢:{e.like}</span>
                    </div>
                    <div className="card-user">
                        <div className="card-user-info">
                            <a>
                                <img src={e.src2} alt=""/> {e.username}
                            </a>
                        </div>
                        <div className="card-likes likes-cpt"></div>
                    </div>
                </div>
            </div>
        })
    }
    render() {
        return (
         <div className="container">
			 <div className="user-base-content">
				 <div className="user-info-box">
					 <div className="user-icon-group">
						 <div className="user-icon">
							 <img src={this.state.obj.u_img} />
							</div>
						 </div>
					 <div className="user-info">
						 <div className="user-name">
							 <span>{this.state.obj.u_name}</span>
                             <span onClick={this.getfocus.bind(this)} className="btn-focus" style={{display:this.state.stybool?"block":"none"}}>
                                关注
                             </span>
                             <span onClick={this.getfocus.bind(this)} className="btn-focus btn-focus-yes" style={{display:this.state.stybool?"none":"block"}}>
                                已关注
                             </span>
                             <img src="http://qnstatic.pianke.me/public/assets/img/user_author.png" width="52px" style={this.state.style1} /> <img src="http://qnstatic.pianke.me/public/assets/img/user_craftsman.png" width="52px" style={this.state.style1} />
							 <img src="http://qnstatic.pianke.me/public/assets/img/user_designer.png" width="52px" style={this.state.style1} /> <img src="http://qnstatic.pianke.me/public/assets/img/user_illustrator.png" width="52px" style={this.state.style1} />
							 <img src="http://qnstatic.pianke.me/public/assets/img/user_musician.png" width="52px" style={this.state.style1} /> <img src="http://qnstatic.pianke.me/public/assets/img/user_anchor.png" width="52px" style={this.state.style1} />
							 <span className="pianke-mail" style={this.state.style1}></span>
						 </div>
						 <div className="user-des">{this.state.obj.u_xinxi}</div>
						 <div className="user-others"><a className="">500<br /><span>粉丝</span></a> <a className="">760<br /><span>关注</span></a> <a className="">1000<br /><span>访客</span></a></div></div></div> <div className="user-menu"><div className="type-title-cpt"></div></div>
			 </div>
			 <div className="data-title data-title-home"><span className="active"><a>全部</a>(100)</span> <span className=""><a>文章</a>(0)</span> <span className=""><a>碎片</a>(0)</span> <span className=""><a>Ting</a>(0)</span> </div>
			 <div style={this.state.style1} className="data-title data-title-home"><span className="active"><a>评论</a>(0)</span> <span className=""><a>喜欢</a>(0)</span> <span className=""><a>粉丝</a>(0)</span> <span className=""><a>片邮</a>(0)</span> </div>
			 <div id="pubul">
                 {this.vFor(this.state.arr)}
                 {this.vFor(this.state.arr)}
                 {this.vFor(this.state.arr)}
                  </div>

         </div>
		);
    }
    getfocus(){
             this.setState({
                 stybool:!this.state.stybool
             })
    }
	componentDidMount(){
		require("./indexuserjs")()


        //ajax请求数据
        var hotname = this.props.state.hotname;
        console.log(this.props.state.hotname);
        var url = "http://localhost:8888/indexuser"
        this.serverRequest = $.post(url, function(result){
            var res = JSON.parse(result)
            for(var i = 0; i < res.length; i++){
                if(res[i].u_name == hotname){
                    this.setState({
                        obj : res[i]
                    });
                    var str = JSON.stringify(res[i])
                    console.log(str);
                    window.sessionStorage.setItem('indexuser', str);
                }
            }
        }.bind(this));
        var obj = JSON.parse(window.sessionStorage.getItem('indexuser') || '{}');
        this.setState({
            obj : obj
        });

        //瀑布流
        function getMinIndex(tempArr){
            var minIndex = 0;
            var minArr = tempArr[0];//加上最小的是 第一个
            for(var i = 0; i < tempArr.length; i++){
                if(tempArr[i] < minArr){
                    minArr = tempArr[i];
                    minIndex = i;
                }
            }
            return minIndex;
        }
        //开始实现瀑布流
        setTimeout(function(){
            var oItem = document.getElementsByClassName("item");
            // console.log(oItem);
            var arr = [];
            for(var i = 0; i < oItem.length; i++){
                if(i < 4){
                    arr.push(oItem[i].offsetHeight);//把前面4个的高度添加到数组
                    // console.log(arr);
                } else {
                    // 需要从数组中找到最 矮的那高度
                    var minIndex = getMinIndex(arr);//找到最小的索引
                    oItem[i].style.position = "absolute";//加定位
                    oItem[i].style.top = arr[minIndex]+(Math.floor(i/4)*5) + "px";  //top的位置
                    oItem[i].style.left = oItem[i].offsetWidth * minIndex+(minIndex*5) + "px";
                    //把最矮高度，改变
                    arr[minIndex] = arr[minIndex] + oItem[i].offsetHeight;
                }
            }
        },10)

	}

    componentWillUnmount(){
        this.serverRequest.abort();
    }
}


export default connect((state) => {
    // console.log(state)
    return {
        state
    }
}, (dipatch) => {
    return {
        getstate(){
            dipatch({

            })
        }
    }
})(introduce);
