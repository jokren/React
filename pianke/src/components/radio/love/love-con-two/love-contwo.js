import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./love-contwo.css"
import "../../icon-font/iconfont.css"

class Lovecontwo extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="main lovecon-two">
				

				<div id="lovecon-four" >
					<div className="love-four-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/03b8d1b5061cf74bc2fd5531e3c1ed2920180415.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">那个时候啊 你就会来喜欢我 对吗</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 西柚家的袜子屋</a></div> <div className="ting-others">1.3 k次播放  |  评论:1  |  喜欢:31
                                </div></div>
				</div>
				
				<div id="lovecon-five" >
					<div className="love-five-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/86d5deca89d1e80aee603792ce4c51c720180414.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">最恨的是你，最爱的也是你。</a></div> <div className="ting-author"><a href="" target="_blank">主播 / DJ程一</a></div> <div className="ting-others">1.5 k次播放  |  评论:9  |  喜欢:60
                                </div></div>
				</div>
				
				<div id="lovecon-six" >
					<div className="love-six-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/34b8ec9c69face8e78b584259355587c20180414.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">三行情书</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 玛奇朵飘浮</a></div> <div className="ting-others">7.4 k次播放  |  评论:43  |  喜欢:253
                                </div></div>
				</div>
				
				

			</div>
		)
	}
}
export default Lovecontwo;