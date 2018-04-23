import React,{Component}from 'react'
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./radio-top.css"
import "../icon-font/iconfont.css"


class Radiotop extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	
	render(){
		return(
			<div className="radio-top-main">
				<div className="radio-top"><span className="iconfont">&#xe670;</span>TOP TING</div>
				
				<div id="radiotopcon-one" >
					<div className="radiotop-one-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/c34f2df9c51cb31bcc6a49a1c62aae7920180411.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">爱你就像爱生命</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 勿先生的声音</a></div> <div className="ting-others">3.9 k次播放  |  评论:20  |  喜欢:72
                                
                                </div></div>
				</div>
				
				<div id="radiotopcon-two" >
					<div className="radiotop-two-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/1adb3d1d0a68438ce44a4a7bd430165d20180318.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">人群中的孤独感</a></div> <div className="ting-author"><a href="" target="_blank">主播 / nearpure</a></div> <div className="ting-others">902次播放  |  评论:1  |  喜欢:6
                                </div></div>
				</div>
				
				<div id="radiotopcon-three" >
					<div className="radiotop-three-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/4e036626b7ee0d95de3599ffa2129c1320180318.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">易燃易爆炸(Cover)</a></div> <div className="ting-author"><a href="" target="_blank">主播 / Ace贾小曼</a></div> <div className="ting-others">990次播放  |  评论:0  |  喜欢:9
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}

export default Radiotop;