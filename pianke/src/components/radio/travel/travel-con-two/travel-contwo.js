import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./travel-contwo.css"
import "../../icon-font/iconfont.css"

class Travelcontwo extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="main2 travlecon-two">
				
				
				<div id="travlecon-four" >
					<div className="travle-four-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/8355c1a8fa9b9dfc22e99e0e4f881ff420180324.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">嘿，你有多久没有出去走走了</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 槿*柠</a></div> <div className="ting-others">2.0 k次播放  |  评论:12  |  喜欢:67
                                </div></div>
				</div>
				
				<div id="travlecon-five" >
					<div className="travle-five-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/b10bcda8051a19829861a88e08f4058e20180312.JPG?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">梦倒塌的地方，今已爬满青苔</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 北及</a></div> <div className="ting-others">3.1 k次播放  |  评论:3  |  喜欢:16
                                </div></div>
				</div>
				
				<div id="travlecon-six" >
					<div className="travle-six-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/988064ac3fb0828f703a87e69942a83a20180311.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">放下回忆的包袱，珍惜的眼前人</a></div> <div className="ting-author"><a href="" target="_blank">主播 / NJ宇婷</a></div> <div className="ting-others">1.2 k次播放  |  评论:4  |  喜欢:2
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}
export default Travelcontwo;