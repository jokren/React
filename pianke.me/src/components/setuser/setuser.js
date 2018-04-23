import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import "./setuser.css"

import  $ from  "jquery"

class setuser extends Component {
	constructor(props){
		super(props)
		this.state = {
			style1:{
				display:"none"
			}
		}
	}
	settel(){
		window.sessionStorage.setItem("title", "更换手机号");
	}
	setpwd(){
		window.sessionStorage.setItem("title", "修改密码");
	}
	render() {
		return (
			<div className="container">
				<div className="user-set-content">
					<div className="type-title-cpt">
						<span className="active">帐号设置</span>
					</div> <div className="set-content">
					<div className="user-set">
						<div className="set-icon">
							<div>
								<span className="set-text">头像:</span>
								<img src="" />
							</div>
							<div className="change-icon">
								<span className="set-point-text">修改</span>
								<form className="am-form" action="">
								<input type="text" />
								<input style={this.state.style1} type="file" id="user-pic" name="logo" />
								</form>
							</div>
						</div>
						<div className="set-name">
							<span className="set-text">昵称:</span> 
							<input type="text" placeholder="请输入用户昵称"  />
							<span className="set-warn-text">4-30个字符,中英文均可</span>
						</div>
						<div className="set-tel">
							<span className="set-text">手机号:</span>
				<span>none</span>
				<span className="set-point-text">
					<a onClick={this.settel.bind(this)} href="#/change">修改</a></span>
					</div> 
						<div className="set-pwd">
							<span className="set-text">密码:</span> 
							<span className="set-point-text">
								<a onClick={this.setpwd.bind(this)} href="#/change">修改</a>
							</span>
						</div> 
						<div className="set-sex">
							<span className="set-text">性别:</span>
							<label className="radiovote"><span className="voteContent">男</span> 
								<input type="radio" name="a" value="1" /> 
								<i className="voteImg" style={this.state.style1}></i>
								<i className="votedImg"></i>
							</label>
							<label className="radiovote">
								<span className="voteContent">女</span> 
								<input type="radio" name="a" value="2" /> 
									<i className="voteImg"></i> 
									<i className="votedImg" style={this.state.style1}></i>
							</label>
						</div> 
						<div className="set-des">
							<span className="set-text">简介:</span> 
							<textarea name="" placeholder="请输入简介"></textarea>
						</div>
						<div className="btn set-btn">保存设置</div>
					</div></div></div></div>
		);
	}
	componentDidMount(){
		require("./setuserjs")()
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
})(setuser);
