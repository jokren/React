import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./movie-conthree.css"
import "../../icon-font/iconfont.css"

class Movieconthree extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="moviemain3 moviecon-three">
				
				
				
				
				<div id="moviecon-seven" >
					<div className="movie-seven-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/0da31e39a3f20be1b0f2f39764b97aaf20180126.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">悬崖上的金鱼姬</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 顾尘寰</a></div> <div className="ting-others">724次播放  |  评论:2  |  喜欢:17
                                </div></div>
				</div>
				
				<div id="moviecon-eight" >
					<div className="movie-eight-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/176525d69cb4d4fc8fed4260d542d03f20180118.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">只问深情，无问西东</a></div> <div className="ting-author"><a href="" target="_blank">主播 / DJ戴杰</a></div> <div className="ting-others">1.6 k次播放  |  评论:1  |  喜欢:62
                                </div></div>
				</div>
				
				<div id="moviecon-nine" >
					<div className="movie-nine-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/a7cc6d808f6d51d9732bf88047ecc4cb20180108.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">《芳华》——芳华不驻，岁月静好</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 爱晚FM</a></div> <div className="ting-others">2.0 k次播放  |  评论:1  |  喜欢:12
                                </div></div>
				</div>
				
			</div>
		)
	}
}
export default Movieconthree;