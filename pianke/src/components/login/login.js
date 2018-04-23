import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import "./login.css"
import  $ from  "jquery"

class login extends Component {
    constructor(props){
        super(props)
        this.state = {
			style1:{
				display:"none"
			}
        }
    }
	hide(){
	    $(".login").hide()
		$("body").css("overflow","auto")
	}
	hide2(){
		$(".login").hide()
		$("body").css("overflow","auto")
		window.sessionStorage.setItem("title", "忘记密码");
	}
	login(e){
		$(e.target).addClass("active")
		$(e.target).siblings("span").removeClass("active")
		$(".register-content").hide()
		$(".login-content").show()
	}
	rsgister(e){
		$(e.target).addClass("active")
		$(e.target).siblings("span").removeClass("active")
		$(".register-content").show()
		$(".login-content").hide()
	}
    render() {
        return (
            <div className="login"><div onClick={this.hide.bind(this)} className="close-login-box"></div>
                <div className="login-box">
                    <div className="pianke-text">世界很美, 而你正好有空</div> 
                    <div className="type-title-cpt">
                        <span onClick={this.login.bind(this)} className="active">登录</span>
                        <span onClick={this.rsgister.bind(this)} className="">注册</span>
                    </div> 
                    <div className="login-content">
                        <div className="login-warn"></div> 
                        <div className="login-input">
                            <input type="text" placeholder="输入手机号" />
                        </div>
                        <div className="login-input">
                            <input type="password" placeholder="密码" />
                        </div> 
                        <div className="forget-psw">
                            <a onClick={this.hide2.bind(this)} href="#/change">忘记密码?</a>
                        </div>
                        <div  className="login-btn loginto">登录</div>
                    </div> 
					<div style={this.state.style1} className="register-content">
                        <img src="http://qnstatic.pianke.me/public/assets/img/pianke-code.png" />
					</div>
                    <div className="login-others-way"><div>社区帐号登录:</div> <div className="share-cpt"><div className="share-sina"></div> <div className="share-wechat"></div> <div className="share-qq"></div> <div className="share-dou"></div></div></div></div></div>
        );
    }
	componentDidMount(){
		require("./loginajax")()
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
})(login);
