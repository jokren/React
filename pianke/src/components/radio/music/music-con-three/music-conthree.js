import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./music-conthree.css"
import "../../icon-font/iconfont.css"

class Musicconthree extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="musicmain3 musiccon-three">
				
				
				
				
				<div id="musiccon-seven" >
					<div className="music-seven-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/e8705729fad0e6d1cab303095a651da620180329.jpeg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">你不敢做的飞行梦，这个人实现了。</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 属鱼先生</a></div> <div className="ting-others">746次播放  |  评论:3  |  喜欢:5
                                </div></div>
				</div>
				
				<div id="musiccon-eight" >
					<div className="music-eight-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/05cfb1609af848ab642266a1da64cd5c20180328.JPG?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">vol.80 吉他屋/喂，可不可以买你的不快乐?</a></div> <div className="ting-author"><a href="" target="_blank">主播 / anqiiiiiiiiii</a></div> <div className="ting-others">2.1 k次播放  |  评论:13  |  喜欢:40
                                </div></div>
				</div>
				
				<div id="musiccon-nine" >
					<div className="music-nine-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/8a75cb093deeeabb66c42846b062793820180327.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">与时间有关的悲伤</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 李瑨瑶瑶瑶瑶</a></div> <div className="ting-others">1.0 k次播放  |  评论:1  |  喜欢:6
                                </div></div>
				</div>
				
			</div>
		)
	}
}
export default Musicconthree;