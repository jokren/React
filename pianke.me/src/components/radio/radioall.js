import React,{Component}from 'react'
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import Radlunbo from './radio-lunbo/radio-lunbo.js';
import Radnav from './radio-nav/radio-nav.js';
import Radiotui from './radio-tui/radio-tui.js';
import Radiotop from './radio-top/radio-top.js';
import Radiohot from './radio-hot/radio-hot.js';
import Radiovoice from './radio-voice/radio-voice.js';


class Radioall extends Component{
	constructor(props){
		super(props)
		this.state={
			
		}
	}
	render(){
		return(
			<div id="radio" className="main">
				<Radlunbo />
                <Radnav />
				<Radiotui />
				<Radiotop />
				<Radiohot />
				<Radiovoice />
				
			</div>
			
		);
	}
}
export default Radioall;