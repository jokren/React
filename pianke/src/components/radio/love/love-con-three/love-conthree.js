import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./love-conthree.css"
import "../../icon-font/iconfont.css"

class Loveconthree extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="main lovecon-three">
				
				
				
				
				<div id="lovecon-seven" >
					<div className="love-seven-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/dada65d0ebc868aa1f66cb040c56f8e520180414.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">你给我最好的宠爱就是偏爱</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 阿源呀~</a></div> <div className="ting-others">6.5 k次播放  |  评论:32  |  喜欢:173
                                </div></div>
				</div>
				
				<div id="lovecon-eight" >
					<div className="love-eight-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/05accdacb29402a8585460f4cb8c7d1320180413.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">我对你仍有爱意，只是对自己无能为力</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 一坨丸子🐵</a></div> <div className="ting-others">1.0 k次播放  |  评论:2  |  喜欢:27
                                </div></div>
				</div>
				
				<div id="lovecon-nine" >
					<div className="love-nine-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/42ab8e095b8546ffe6325314d46d5b1f20180413.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">暗恋，是一场哭不出来的浪漫</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 弓氏墨宸Cc</a></div> <div className="ting-others">1.5 k次播放  |  评论:1  |  喜欢:9
                                </div></div>
				</div>
				
			</div>
		)
	}
}
export default Loveconthree;