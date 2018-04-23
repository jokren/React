import React,{Component}from 'react'
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./story.css"
import "../../icon-font/iconfont.css"
import img3 from "../../img/radio-type-img4.png"


import Loveconthree from '../../love/love-con-three/love-conthree';
import Travelcontwo from '../../travel/travel-con-two/travel-contwo';
import Storycontwo from '../story-con-two/story-contwo';
import Musiccontwo from '../../music/music-con-two/music-contwo';
import Moviecontwo from '../../movie/movie-con-two/movie-contwo';
import Readcontwo from '../../read/read-con-two/read-contwo';

class Storylogo extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	
	render(){
		return(
			<div className="storymain">
				<div className="radio-type-info">
				<div className="radio-type-img">
				<img src={img3} />
				</div> 
				<div className="radio-types"><div className="radio-type-link">
                        分类:
                        <a href="#/Storyall/Storycontwo">故事</a>
                        <a href="#/Musicall/Musiccontwo">音乐</a>
                        <a href="#/Readall/Readcontwo">读诗</a> 
                        <a href="#/Movieall/Moviecontwo">电影</a>
                        <a href="#/Travelall/Travelcontwo">旅行</a>
                        <a href="#/Loveall/Loveconthree">爱情</a>
                        </div></div>
                        </div>
			</div>
		)
	}
}

export default Storylogo;