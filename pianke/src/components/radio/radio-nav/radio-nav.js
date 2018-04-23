import React,{Component}from 'react'
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./radio-nav.css"
import "../icon-font/iconfont.css"


class Movielogo extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	
	render(){
		return(
			<div className="dadio-nav-main ">
			<div className="navtop">
				<div className="radio-type-group">
				<div className="radio-type-cpt">
				<a href="#/Loveall">
				<span className="iconfont">&#xe625;</span>爱情</a></div> <div className="radio-type-cpt">
				<a href="#/Travelall">
				<span className="iconfont">&#xe625;</span>旅行</a></div> 
				<div className="radio-type-cpt"><a href="#/Storyall"><span className="iconfont">&#xe625;</span>故事</a>
				</div> <div className="radio-type-cpt"><a href="#/Musicall">
				<span className="iconfont">&#xe625;</span>音乐</a></div>
				<div className="radio-type-cpt"><a href="#/Movieall">
				<span className="iconfont">&#xe625;</span>电影</a></div> 
				<div className="radio-type-cpt"><a href="#/Readall"><span className="iconfont">&#xe625;</span>读诗</a></div>
				</div>
				</div>
			</div>
		)
	}
}

export default Movielogo;