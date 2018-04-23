import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import "./header.css"
import  $ from  "jquery"

class header extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <header className="">
                <div className="head">
                    <div className="head-logo"><a href=""></a></div>
                    <ul className="navbar">
                        <li className="active"><a href="#/">首页</a></li>
                        <li className="hidden"><a href="javascript:;">阅读</a></li>
                        <li className=""><a href="#/Radio">电台</a></li>
                        <li className=""><a href="#/Container">碎片</a></li>
                        <li className="hidden"><a href="javascript:;">动态</a></li>
                        <li className=""><a href="#/client">客户端</a></li>
                    </ul>
                    <div className="navbar-icon">
                        <div className="editer gologin"><div>
                            <img src="http://qnstatic.pianke.me/public/assets/img/edit-icon.png" width="19px" height="20px" /></div>
                        </div>
                        <div className="massage hidden">
                            <div className="msg-icon">
                                <img src="http://qnstatic.pianke.me/public/assets/img/msg.png" width="44px" /> <div className="msgnum hidden">
                            </div>
                            </div>
                            <div className="msg-menu">
                                <div className="drop-menu msg-drop">
                                    <ul>
                                        <li><a href="javascript:;">评论 <span>0</span></a></li> <li><a href="">喜欢 <span>0</span></a></li> <li><a href="">粉丝 <span>0</span></a></li> <li><a href="">片邮 <span>0</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="userinfo hidden"><a href="#/introduce"><img src="http://qnstatic.pianke.me/public/assets/img/user-default-img.png" className="user-icon" /></a> <div className="msg-menu"><div className="drop-menu userinfo-drop"><ul><li><a href="#/setuser">账号设置</a></li> <li className="outlogin"><a href="#/">退出</a></li></ul></div></div></div>
                        <div className="login-btn gologin"><div>登录&nbsp;<span>/</span>&nbsp;注册</div></div></div></div></header>
        );
    }
	componentDidMount(){
		require("./headerjs")()
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
})(header);
