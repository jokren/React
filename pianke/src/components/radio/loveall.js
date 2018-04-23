import React,{Component}from 'react'
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import Lovelogo from './love/love-logo/love';
import Lovecon from './love/love-con/love-con';
import Lovecontwo from './love/love-con-two/love-contwo';
import Loveconthree from './love/love-con-three/love-conthree';



import Travelcontwo from './travel/travel-con-two/travel-contwo';
import Storycontwo from './story/story-con-two/story-contwo';
import Musiccontwo from './music/music-con-two/music-contwo';
import Moviecontwo from './movie/movie-con-two/movie-contwo';
import Readcontwo from './read/read-con-two/read-contwo';


class loveall extends Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	render(){
		return(
			<div id="loveall" className="main">
                <Lovelogo />
				<Lovecon />
				<Lovecontwo />
				
				<Route path="/Loveall/Lovecontwo" component={Lovecontwo} />
				<Route path="/Travelall/Travelcontwo" component={Travelcontwo} />
				<Route path="/Storyall/Storycontwo" component={Storycontwo} />
				<Route path="/Musicall/Musiccontwo" component={Musiccontwo} />
				<Route path="/Movieall/Moviecontwo" component={Moviecontwo} />
				<Route path="/Readall/Readcontwo" component={Readcontwo} />
				<Loveconthree />
			</div>
			
		);
	}
}
export default loveall;