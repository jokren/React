import React,{Component}from 'react'
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./movie.css"
import "../../icon-font/iconfont.css"
import img5 from "../../img/radio-type-img2.png"

import Lovecontwo from '../../love/love-con-two/love-contwo';
import Travelcontwo from '../../travel/travel-con-three/travel-conthree';
import Storyconthree from '../../story/story-con-three/story-conthree';
import Musiccontwo from '../../music/music-con-two/music-contwo';
import Moviecontwo from '../movie-con-two/movie-contwo';
import Readcontwo from '../../read/read-con-two/read-contwo';

class Movielogo extends Component{
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
				<img src={img5} />
				</div> 
				<div className="radio-types"><div className="radio-type-link">
                        分类:
                        <a href="#/Storyall/Storyconthree">故事</a>
                        <a href="#/Storyall/Storycontwo">音乐</a>
                        <a href="#/Readall/Readcontwo">读诗</a> 
                        <a href="#/Movieall/Moviecontwo">电影</a>
                        <a href="#/Travelall/Travelcontwo">旅行</a>
                        <a href="#/Loveall/Lovecontwo">爱情</a>
                        </div></div>
                        </div>
			</div>
		)
	}
}

export default Movielogo;