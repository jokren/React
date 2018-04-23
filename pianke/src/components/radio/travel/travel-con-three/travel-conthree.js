import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./travel-conthree.css"
import "../../icon-font/iconfont.css"

class Travelconthree extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="main travlecon-three">
				
				
				
				
				<div id="travlecon-seven" >
					<div className="ltravle-seven-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/7055f8476f8e878d66b295690364358220180310.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">厦门，后会无期</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 贝拉bella</a></div> <div className="ting-others">1.3 k次播放  |  评论:1  |  喜欢:12
                                </div></div>
				</div>
				
				<div id="travlecon-eight" >
					<div className="travle-eight-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/0fb5050dc16b4cad71e8a44b3389ba2920180223.jpeg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">寻找</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 丑丑3637481</a></div> <div className="ting-others">1.8 k次播放  |  评论:2  |  喜欢:18
                                </div></div>
				</div>
				
				<div id="travlecon-nine" >
					<div className="travle-nine-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/87938d6257813174d261cf970f22ab9f20180221.png?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">春风十里不如你</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 河畔时光</a></div> <div className="ting-others">2.8 k次播放  |  评论:1  |  喜欢:6
                                </div></div>
				</div>
				
			</div>
		)
	}
}
export default Travelconthree;