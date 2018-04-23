import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./movie-contwo.css"
import "../../icon-font/iconfont.css"

class Moviecontwo extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="movieconmain2 moviecon-two">
				
				
				<div id="moviecon-four" >
					<div className="movie-four-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/f24bc78c8cb95e90f58bdf8296067b5020180312.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">《love,roise》 ——英版李大仁与程又青的故事</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 爱晚FM</a></div> <div className="ting-others">1.0 k次播放  |  评论:2  |  喜欢:11
                                </div></div>
				</div>
				
				<div id="moviecon-five" >
					<div className="movie-five-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/76dca6bf4f4f9d2049c6c8b593899c3420180213.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">《前任攻略三》 ——如果，我们各自都再向前一步，结局会不会不</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 爱晚FM</a></div> <div className="ting-others">2.8 k次播放  |  评论:4  |  喜欢:23
                                </div></div>
				</div>
				
				<div id="moviecon-six" >
					<div className="movie-six-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/919abe892bd35cffbbfa1b302197921620180205.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">《心灵捕手》——卸下层层伪装，与真我坦诚相见</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 爱晚FM</a></div> <div className="ting-others">976次播放  |  评论:2  |  喜欢:7
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}
export default Moviecontwo;