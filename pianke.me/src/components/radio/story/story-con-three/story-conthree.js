import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./story-conthree.css"
import "../../icon-font/iconfont.css"

class Storyconthree extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="storymain3 storycon-three">
				
				
				
				
				<div id="storycon-seven" >
					<div className="story-seven-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/566d69a9ef3a5cc8c7907c0e3960e1d520180411.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">我的爸妈是老小孩</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 一坨丸子🐵</a></div> <div className="ting-others">4.1 k次播放  |  评论:20  |  喜欢:57
                                </div></div>
				</div>
				
				<div id="storycon-eight" >
					<div className="story-eight-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/bd7e7b8b45e45a01368f773adc246f1320180411.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">我过得很好，只是不再喜欢你了</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 吉祥君</a></div> <div className="ting-others">977次播放  |  评论:0  |  喜欢:16
                                </div></div>
				</div>
				
				<div id="storycon-nine" >
					<div className="story-nine-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/66760d41cbed17af118d539f76f3e35220180410.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">还记得穿着校服的爱情吗？</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 七连</a></div> <div className="ting-others">1.2 k次播放  |  评论:2  |  喜欢:17
                                </div></div>
				</div>
				
			</div>
		)
	}
}
export default Storyconthree;