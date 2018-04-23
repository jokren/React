import React, {
	Component
} from 'react'

import $ from "jquery";
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./travel-con.css"
import "../../icon-font/iconfont.css"

class Travelcon extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	
	render(){
		return(
			<div className="main">
				<div id="travelcon-one" >
					<div className="travel-one-img" onClick={this.props.getname.bind(this)}>
					<span className="iconfont icon">&#xe662;</span>
					<a href="#/indexradio"><img src="http://hpimg.pianke.com/c6a555ae3a48fd55b1d02dff2e16b50d20180414.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a >《旅途北京》</a></div> <div className="ting-author"><a >主播 / 爱晚FM</a></div> <div className="ting-others">91次播放  |  评论:0  |  喜欢:0
                                </div></div>
				</div>
				
				<div id="travelcon-two" >
					<div className="travel-two-img" onClick={this.props.getname2.bind(this)}>
					<span className="iconfont icon">&#xe662;</span>
					<a href="#/indexradio"><img src="http://hpimg.pianke.com/4880bd3f55c56d01e3a58f91694dee5020180414.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a >黄土高原的变形记</a></div> <div className="ting-author"><a >主播 / 爱晚FM</a></div> <div className="ting-others">54次播放  |  评论:0  |  喜欢:1
                                </div></div>
				</div>
				
				<div id="travelcon-three" >
					<div className="travel-three-img" onClick={this.props.getname3.bind(this)}>
					<span className="iconfont icon">&#xe662;</span>
					<a href="#/indexradio"><img src="http://hpimg.pianke.com/94f06e545cf25e61220b6abd1f4116b820180324.jpg?imageView2/2/w/300/format/jpg" className="" /> <span></span></a></div>
					<div className="ting-info"><div className="ting-title"><a >【乌镇游记】印象西栅-江南水乡 水墨乌镇</a></div> <div className="ting-author"><a>主播 / NJ宇婷</a></div> <div className="ting-others">1.1 k次播放  |  评论:0  |  喜欢:4
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
            var $name=$(e.target).parents("#travelcon-one").find(".ting-info").find(".ting-title").find("a").text();
            	console.log($name)
            dipatch({
                type:"ABC",
                radioname:$name
            })
        },
        getname2(e){
            var $name=$(e.target).parents("#travelcon-two").find(".ting-info").find(".ting-title").find("a").text();
            	console.log($name)
            dipatch({
                type:"ABC",
                radioname:$name
            })
        },
        getname3(e){
            var $name=$(e.target).parents("#travelcon-three").find(".ting-info").find(".ting-title").find("a").text();
            	console.log($name)
            dipatch({
                type:"ABC",
                radioname:$name
            })
        }
    }
})(Travelcon);