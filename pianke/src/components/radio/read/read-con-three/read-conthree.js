import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./read-conthree.css"
import "../../icon-font/iconfont.css"

class Readconthree extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="readmain3 readcon-three">
				
				
				
				
				<div id="readcon-seven" >
					<div className="read-seven-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/374395709efe2fc398384919290e78fc20180205.png?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">或许，一切都是时间的问题</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 树上有云</a></div> <div className="ting-others">5.6 k次播放  |  评论:5  |  喜欢:228
                                </div></div>
				</div>
				
				<div id="readcon-eight" >
					<div className="read-eight-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/ea1f278d3d07b1089e4f49d61665329720180207.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">等风来</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 越人辞</a></div> <div className="ting-others">2.8 k次播放  |  评论:14  |  喜欢:87
                                </div></div>
				</div>
				
				<div id="readcon-nine" >
					<div className="read-nine-img">
					<span className="iconfont icon">&#xe662;</span>
					<a href="" target="_blank"><img src="http://hpimg.pianke.com/0bf77448922fc99dede2466d71430ddd20180130.jpeg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a href="" target="_blank">老人｜卡瓦菲斯</a></div> <div className="ting-author"><a href="" target="_blank">主播 / 许邻</a></div> <div className="ting-others">2.6 k次播放  |  评论:2  |  喜欢:39
                                </div></div>
				</div>
				
			</div>
		)
	}
}
export default Readconthree;