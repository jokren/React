import React,{Component}from 'react'
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import Travellogo from './travel/travel-logo/travel';
import Travelcon from './travel/travel-con/travel-con';
import Travelcontwo from './travel/travel-con-two/travel-contwo';
import Travelconthree from './travel/travel-con-three/travel-conthree';


import Loveconthree from './love/love-con-three/love-conthree';
import Storyconthree from './story/story-con-three/story-conthree';
import Musiccontwo from './music/music-con-two/music-contwo';
import Moviecontwo from './movie/movie-con-two/movie-contwo';
import Readcontwo from './read/read-con-two/read-contwo';


class Travelall extends Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	render(){
		return(
			<div id="travelall" className="main">
                <Travellogo />
				<Travelcon />

				<Travelconthree />
				
				<Route path="/Loveall/Loveconthree" component={Loveconthree} />
				<Route path="/Travelall/Travelcontwo" component={Travelcontwo} />
				<Route path="/Storyall/Storyconthree" component={Storyconthree} />
				<Route path="/Musicall/Musiccontwo" component={Musiccontwo} />
				<Route path="/Movieall/Moviecontwo" component={Moviecontwo} />
				<Route path="/Readall/Readcontwo" component={Readcontwo} />
			</div>
			
		);
	}
}
export default Travelall;