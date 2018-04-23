import React,{Component}from 'react'
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./love.css"
import "../../icon-font/iconfont.css"
import img1 from "../../img/radio-type-img1.png"
import lovepage from "../../loveall.js";

import Lovecontwo from '../love-con-two/love-contwo';
import Travelcontwo from '../../travel/travel-con-three/travel-conthree';
import Storycontwo from '../../story/story-con-two/story-contwo';
import Musiccontwo from '../../music/music-con-two/music-contwo';
import Moviecontwo from '../../movie/movie-con-two/movie-contwo';
import Readcontwo from '../../read/read-con-two/read-contwo';

class Love extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	
	render(){
		return(

			<div className="main">
				<div className="radio-type-info">
				<div className="radio-type-img">
				<img src={img1} />
				</div> 
					<div className="radio-types"><div className="radio-type-link">
                        分类:
                        <a href="#/Storyall/Storycontwo">故事</a>                       
                        <a href="#/Musicall/Musiccontwo">音乐</a>
                        <a href="#/Readall/Readcontwo">读诗</a> 
                        <a href="#/Movieall/Moviecontwo">电影</a> 
                        <a href="#/Travelall/Travelcontwo">旅行</a> 
                        <a href="#/Loveall/Lovecontwo">爱情</a>
                        </div>
                   		</div>
                        </div>
			</div>


		)
	}
}

export default Love;