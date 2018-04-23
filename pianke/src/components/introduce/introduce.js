import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import "./introduce.css"
import  $ from  "jquery"

class introduce extends Component {
    constructor(props){
        super(props)
        this.state = {
			style1:{
				display:"none"
			}
        }
    }
	xinxi(e){
    	$(e.target).addClass("active")
		$(e.target).siblings("span").removeClass("active")
		$(".data-title-home").hide()
		$(".data-title-home").eq($(e.target).index()).show()
	}
    render() {
        return (
         <div className="container">
			 <div className="user-base-content">
				 <div className="user-info-box">
					 <div className="user-icon-group">
						 <div className="user-icon">
							 <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/pnE1u4HSKTibJJYZpTuf0YnBnnt1VJ8Qsn2picYiaTuSqOEjQlJfh2nakNEA95icCTSJcgcOlfPcKKOW9rRAVfHicWg/132" />
							</div>
						 </div>
					 <div className="user-info">
						 <div className="user-name">
							 <span>4737287</span> <span className="btn-focus" style={this.state.style1}>
                            关注
                        </span> <span className="btn-focus btn-focus-yes" style={this.state.style1}>
                            已关注
                        </span> <img src="http://qnstatic.pianke.me/public/assets/img/user_author.png" width="52px" style={this.state.style1} /> <img src="http://qnstatic.pianke.me/public/assets/img/user_craftsman.png" width="52px" style={this.state.style1} />
							 <img src="http://qnstatic.pianke.me/public/assets/img/user_designer.png" width="52px" style={this.state.style1} /> <img src="http://qnstatic.pianke.me/public/assets/img/user_illustrator.png" width="52px" style={this.state.style1} />
							 <img src="http://qnstatic.pianke.me/public/assets/img/user_musician.png" width="52px" style={this.state.style1} /> <img src="http://qnstatic.pianke.me/public/assets/img/user_anchor.png" width="52px" style={this.state.style1} />
							 <span className="pianke-mail" style={this.state.style1}></span>
						 </div>
						 <div className="user-des">这是一个还没有简介的Pianker~ </div>
						 <div className="user-others"><a className="">0<br /><span>粉丝</span></a> <a className="">0<br /><span>关注</span></a> <a className="">0<br /><span>访客</span></a></div></div></div> <div className="user-menu"><div className="type-title-cpt"><span onClick={this.xinxi.bind(this)} className="active">我的主页</span><span onClick={this.xinxi.bind(this)} className="">消息中心</span></div></div>
			 </div>
			 <div className="data-title data-title-home"><span className="active"><a>全部</a>(0)</span> <span className=""><a>文章</a>(0)</span> <span className=""><a>碎片</a>(0)</span> <span className=""><a>Ting</a>(0)</span> </div>
			 <div style={this.state.style1} className="data-title data-title-home"><span className="active"><a>评论</a>(0)</span> <span className=""><a>喜欢</a>(0)</span> <span className=""><a>粉丝</a>(0)</span> <span className=""><a>片邮</a>(0)</span> </div>
			 <div className="data-content"><div className="no-comment">
				 您还没有发布过作品
			 </div>
				 <div  className="img-group-cpt"></div> <div className="no-more-data" style={this.state.style1}>-&nbsp;已加载全部&nbsp;-</div></div>
		  </div>
		);
    }
	componentDidMount(){
		require("./introducejs")()
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
