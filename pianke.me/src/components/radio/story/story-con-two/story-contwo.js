import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./story-contwo.css"
import "../../icon-font/iconfont.css"

class Storycontwo extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="storyconmain2 storycon-two">
				
				
				<div id="storycon-four" >
					<div className="story-four-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/2028cc4e428a5d7a1fa296ed1c79d15720180415.png?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">没有一个90后，会注销自己的QQ。</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 树茵</a></div> <div className="ting-others">441次播放  |  评论:2  |  喜欢:3
                                </div></div>
				</div>
				
				<div id="storycon-five" >
					<div className="story-five-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/996e4c98a747ad5fbd90ddf533ca817020180413.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">为什么年纪越大，越难遇到合适的人？</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 弓氏墨宸Cc</a></div> <div className="ting-others">877次播放  |  评论:0  |  喜欢:21
                                </div></div>
				</div>
				
				<div id="storycon-six" >
					<div className="story-six-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/d539d5ec90df3de5796022ae4fa24bb520180413.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">春天和你，都来得刚刚好</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 吉祥君</a></div> <div className="ting-others">883次播放  |  评论:1  |  喜欢:6
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}
export default Storycontwo;