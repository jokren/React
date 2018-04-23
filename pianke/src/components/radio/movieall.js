import React,{Component}from 'react'
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import Movielogo from './movie/movie-logo/movie';
import Moviecon from './movie/movie-con/movie-con';
import Moviecontwo from './movie/movie-con-two/movie-contwo';
import Movieconthree from './movie/movie-con-three/movie-conthree';

import Lovecontwo from './love/love-con-two/love-contwo';
import Travelcontwo from './travel/travel-con-two/travel-contwo';
import Storyconthree from './story/story-con-three/story-conthree';
import Musiccontwo from './music/music-con-two/music-contwo';
import Readcontwo from './read/read-con-two/read-contwo';



class Moveall extends Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	render(){
		return(
			<div id="moveall" className="main">
                <Movielogo />
				<Moviecon />
				<Moviecontwo />
				<Movieconthree />
				<Route path="/Loveall/Lovecontwo" component={Lovecontwo} />
				<Route path="/Travelall/Travelcontwo" component={Travelcontwo} />
				<Route path="/Storyall/Storyconthree" component={Storyconthree} />
				<Route path="/Musicall/Musiccontwo" component={Musiccontwo} />
				<Route path="/Readall/Readcontwo" component={Readcontwo} />
			</div>
			
		);
	}
}
export default Moveall;