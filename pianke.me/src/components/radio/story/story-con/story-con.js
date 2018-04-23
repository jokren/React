import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./story-con.css"
import "../../icon-font/iconfont.css"

class Storycon extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="storyconmain">
				<div id="storycon-one" >
					<div className="story-one-img" onClick={this.props.getname}>
					<span className="iconfont icon">&#xe662;</span>
					<a href="#/indexradio"><img src="http://hpimg.pianke.com/162cea607fbda1892935f1e8ef4e4fe620180416.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a >你需要的时候，我都在</a></div> <div className="ting-author"><a >主播 / 一坨丸子🐵</a></div> <div className="ting-others">324次播放  |  评论:0  |  喜欢:6
                                </div></div>
				</div>
				
				<div id="storycon-two" >
					<div className="story-two-img" onClick={this.props.getname2}>
					<span className="iconfont icon">&#xe662;</span>
					<a href="#/indexradio"><img src="http://hpimg.pianke.com/070ae571f8f42287a7fbc517ce7355f720180416.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a >雨中的不能说寂寞星球</a></div> <div className="ting-author"><a>主播 / 余    .</a></div> <div className="ting-others">140次播放  |  评论:0  |  喜欢:2
                                </div></div>
				</div>
				
				<div id="storycon-three" >
					<div className="story-three-img" onClick={this.props.getname3}>
					<span className="iconfont icon">&#xe662;</span>
					<a href="#/indexradio"><img src="http://hpimg.pianke.com/5774ea974d2cc4c395100e47c011c6c420180415.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a >暗恋这条路，道阻且长</a></div> <div className="ting-author"><a>主播 / 明安先生</a></div> <div className="ting-others">732次播放  |  评论:0  |  喜欢:4
                                </div></div>
				</div>
				
				
				
			</div>
		)
	}
}
export default connect((state) =>{
    return {
        state
    }
}, (dipatch) =>{
    return {
        getname(e){
            var $name=$(e.target).parents("#storycon-one").find(".ting-info").find(".ting-title").find("a").text();
            	console.log($name)
            dipatch({
                type:"ABC",
                radioname:$name
            })
        },
        getname2(e){
            var $name=$(e.target).parents("#storycon-two").find(".ting-info").find(".ting-title").find("a").text();
            	console.log($name)
            dipatch({
                type:"ABC",
                radioname:$name
            })
        },
        getname3(e){
            var $name=$(e.target).parents("#storycon-three").find(".ting-info").find(".ting-title").find("a").text();
            	console.log($name)
            dipatch({
                type:"ABC",
                radioname:$name
            })
        }
    }
})(Storycon);