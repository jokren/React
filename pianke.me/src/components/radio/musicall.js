import React,{Component}from 'react'
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import Musiclogo from './music/music-logo/music';
import Musiccon from './music/music-con/music-con';
import Musiccontwo from './music/music-con-two/music-contwo';
import Musicconthree from './music/music-con-three/music-conthree';


import Lovecontwo from './love/love-con-two/love-contwo';
import Travelconthree from './travel/travel-con-three/travel-conthree';
import Storycontwo from './story/story-con-two/story-contwo';
import Moviecontwo from './movie/movie-con-two/movie-contwo';
import Readcontwo from './read/read-con-two/read-contwo';



class Musicall extends Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	render(){
		return(
			<div id="musicall" className="main">
                <Musiclogo />
				<Musiccon />
				<Musiccontwo />
				<Musicconthree />
				<Route path="/Loveall/Lovecontwo" component={Lovecontwo} />
				<Route path="/Travelall/Travelconthree" component={Travelconthree} />
				<Route path="/Storyall/Storycontwo" component={Storycontwo} />

				<Route path="/Movieall/Moviecontwo" component={Moviecontwo} />
				<Route path="/Readall/Readcontwo" component={Readcontwo} />
			</div>
			
		);
	}
}
export default Musicall;