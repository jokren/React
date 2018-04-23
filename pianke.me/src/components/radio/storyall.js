import React,{Component}from 'react'
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import Storylogo from './story/story-logo/story';
import Storycon from './story/story-con/story-con';
import Storycontwo from './story/story-con-two/story-contwo';
import Storyconthree from './story/story-con-three/story-conthree';


import Loveconthree from './love/love-con-three/love-conthree';
import Travelcontwo from './travel/travel-con-two/travel-contwo';
import Musiccontwo from './music/music-con-two/music-contwo';
import Moviecontwo from './movie/movie-con-two/movie-contwo';
import Readcontwo from './read/read-con-two/read-contwo';




class Storyall extends Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	render(){
		return(
			<div id="storyall" className="main">
                <Storylogo />
				<Storycon />
				<Storycontwo />
				<Storyconthree />
				<Route path="/Loveall/Loveconthree" component={Loveconthree} />
				<Route path="/Travelall/Travelcontwo" component={Travelcontwo} />

				<Route path="/Musicall/Musiccontwo" component={Musiccontwo} />
				<Route path="/Movieall/Moviecontwo" component={Moviecontwo} />
				<Route path="/Readall/Readcontwo" component={Readcontwo} />
				
			</div>
			
		);
	}
}
export default Storyall;