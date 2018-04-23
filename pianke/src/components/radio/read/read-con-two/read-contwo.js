import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./read-contwo.css"
import "../../icon-font/iconfont.css"

class Readcontwo extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="readconmain2 readcon-two">
				
				
				<div id="readcon-four" >
					<div className="read-four-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/466f0fe83e4f78f0677e190e9ec076ed20180329.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">一百年前遇见你</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 玛奇朵飘浮</a></div> <div className="ting-others">1.8 k次播放  |  评论:10  |  喜欢:21
                                </div></div>
				</div>
				
				<div id="readcon-five" >
					<div className="read-five-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/76b710e12b81085bfa31058e7a985cf720180329.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">作茧</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 玛奇朵飘浮</a></div> <div className="ting-others">984次播放  |  评论:2  |  喜欢:9
                                </div></div>
				</div>
				
				<div id="readcon-six" >
					<div className="read-six-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/11ce90f64a5d06bf41cbafdcc865c01220180310.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">爱的生命——四季之爱</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 墨菲_</a></div> <div className="ting-others">607次播放  |  评论:2  |  喜欢:13
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}
export default Readcontwo;