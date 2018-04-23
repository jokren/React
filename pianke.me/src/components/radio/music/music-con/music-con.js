import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./music-con.css"
import "../../icon-font/iconfont.css"

class Musiccon extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="musicconmain">
				<div id="musiccon-one" >
					<div className="music-one-img" onClick={this.props.getname}>
					<span className="iconfont icon">&#xe662;</span>
					<a href="#/indexradio"><img src="http://hpimg.pianke.com/1fe470975c9e8da03d5631ec5375bd8d20180410.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a >童谣</a></div> <div className="ting-author"><a >主播 / woo崆</a></div> <div className="ting-others">1.2 k次播放  |  评论:3  |  喜欢:55
                                </div></div>
				</div>
				
				<div id="musiccon-two" >
					<div className="music-two-img" onClick={this.props.getname2}>
					<span className="iconfont icon">&#xe662;</span>
					<a href="#/indexradio"><img src="http://hpimg.pianke.com/b129275220d82fa2c577553a7cd5debe20180403.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a >Ali的生活感</a></div> <div className="ting-author"><a >主播 / Mukyo木西</a></div> <div className="ting-others">587次播放  |  评论:0  |  喜欢:8
                                </div></div>
				</div>
				
				<div id="musiccon-three" >
					<div className="music-three-img" onClick={this.props.getname3}>
					<span className="iconfont icon">&#xe662;</span>
					<a href="#/indexradio"><img src="http://hpimg.pianke.com/bf127020fe1fd61dd12363781909867f20180331.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a >蝶々結び feat.胖哒</a></div> <div className="ting-author"><a >主播 / 苏陌丹</a></div> <div className="ting-others">849次播放  |  评论:1  |  喜欢:16
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
            var $name=$(e.target).parents("#musiccon-one").find(".ting-info").find(".ting-title").find("a").text();
            	console.log($name)
            dipatch({
                type:"ABC",
                radioname:$name
            })
        },
        getname2(e){
            var $name=$(e.target).parents("#musiccon-two").find(".ting-info").find(".ting-title").find("a").text();
            	console.log($name)
            dipatch({
                type:"ABC",
                radioname:$name
            })
        },
        getname3(e){
            var $name=$(e.target).parents("#musiccon-three").find(".ting-info").find(".ting-title").find("a").text();
            	console.log($name)
            dipatch({
                type:"ABC",
                radioname:$name
            })
        }
    }
})(Musiccon);