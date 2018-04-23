import React,{Component}from 'react'
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./radio-lunbo.css"
import "../icon-font/iconfont.css"

import banner1 from "../img/baner-1.jpg"
import banner2 from "../img/banner-2.jpg"
import banner3 from "../img/banner-3.jpg"

class Radiolunbo extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	
	render(){
		return(
			<div className="dadio-nav-main ">
				<div className="luntan-all" id='luntan-all'>
					<div className="screen1">
						<ul id="ul">
							<li><img src={banner1} /></li>
							<li><img src={banner2} /></li>
							<li><img src={banner3} /></li>
						</ul>
						<ol>
							<li className="current">
								<a href="#"></a>
							</li>
							<li>
								<a href="#"></a>
							</li>
							<li>
								<a href="#"></a>
							</li>
						</ol>
					</div>
				</div>
			</div>
		)
	}
	
	componentDidMount() {
       require("./lunbo.js")()
    }
}

export default Radiolunbo;