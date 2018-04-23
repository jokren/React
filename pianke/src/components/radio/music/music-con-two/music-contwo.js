import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./music-contwo.css"
import "../../icon-font/iconfont.css"

class Musiccontwo extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="musicconmain2 musiccon-two">
				
				
				<div id="musiccon-four" >
					<div className="music-four-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/1d03334010de51acc0952983362abe9820180330.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">《在人间》</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 荏城</a></div> <div className="ting-others">2.0 k次播放  |  评论:0  |  喜欢:6
                                </div></div>
				</div>
				
				<div id="musiccon-five" >
					<div className="music-five-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/fb18cd0d0edc454d69c021f9a024894c20180329.jpeg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">“异地恋，你们能坚持多久？”</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 属鱼先生</a></div> <div className="ting-others">1.7 k次播放  |  评论:5  |  喜欢:23
                                </div></div>
				</div>
				
				<div id="musiccon-six" >
					<div className="music-six-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/d539d5ec90df3de5796022ae4fa24bb520180413.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">春天和你，都来得刚刚好</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 吉祥君</a></div> <div className="ting-others">883次播放  |  评论:1  |  喜欢:6
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}
export default Musiccontwo;