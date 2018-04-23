import React,{Component}from 'react'
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import Readlogo from './read/read-logo/read';
import Readcon from './read/read-con/read-con';
import Readcontwo from './read/read-con-two/read-contwo';
import Readconthree from './read/read-con-three/read-conthree';


import Loveconthree from './love/love-con-three/love-conthree';
import Travelcontwo from './travel/travel-con-two/travel-contwo';
import Storycontwo from './story/story-con-two/story-contwo';
import Musiccontwo from './music/music-con-two/music-contwo';
import Moviecontwo from './movie/movie-con-two/movie-contwo';




class Readall extends Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	render(){
		return(
			<div id="readall" className="main">
                <Readlogo />
				<Readcon />
				<Readcontwo />
				<Readconthree />
				<Route path="/Loveall/Loveconthree" component={Loveconthree} />
				<Route path="/Travelall/Travelcontwo" component={Travelcontwo} />
				<Route path="/Storyall/Storycontwo" component={Storycontwo} />
				<Route path="/Musicall/Musiccontwo" component={Musiccontwo} />
				<Route path="/Movieall/Moviecontwo" component={Moviecontwo} />

			</div>
			
		);
	}
}
export default Readall;