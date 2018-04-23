import React,{Component}from 'react'
import { Route, Link } from "react-router-dom";
import { connect } from 'react-redux'

import "./radio-hot.css"
import "../icon-font/iconfont.css"


class Radiohot extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	
	
	render(){
		return(
			<div className="radio-hot-main">
				<div className="radio-hot"><span className="iconfont">&#xe670;</span>热门电台 | Hot Radio</div>
				
				<div className="radio-cpt">
				<div className="radio-img">
				<img src="http://pkicdn.image.alimmdn.com/old/newuploads/d02e858975daa236c3cb82231561fe69.jpg" className="" /> 
				<img src="http://pkicdn.image.alimmdn.com/old/newuploads/d02e858975daa236c3cb82231561fe69.jpg" className="" /> 
				<img src="http://pkicdn.image.alimmdn.com/old/newuploads/d02e858975daa236c3cb82231561fe69.jpg" className="" /> 
				<a href="/pages/radio/radioInfo.html?id=581ef487723125e14e8b45bf" target="_blank">
				<span className="radio-img-bg"></span> </a></div> 
				<div className="radio-info"><div className="radio-title"><a href="/pages/radio/radioInfo.html?id=581ef487723125e14e8b45bf" target="_blank">最新发声</a></div> 
				<div className="radio-author"><a href="/pages/user/user.html?uid=550036" target="_blank">主播&nbsp;/&nbsp;pianketing</a></div>
				<div className="radio-others">12.3 m次播放</div></div></div>
				
				<div className="radio-cpt">
				<div className="radio-img">
				<img src="http://pkicdn.image.alimmdn.com/old/newuploads/89f647e50adf785a565baeccd186edc8.jpg" className="" /> 
				<img src="http://pkicdn.image.alimmdn.com/old/newuploads/89f647e50adf785a565baeccd186edc8.jpg" className="" /> 
				<img src="http://pkicdn.image.alimmdn.com/old/newuploads/89f647e50adf785a565baeccd186edc8.jpg" className="" /> 
				<a href="/pages/radio/radioInfo.html?id=55d6c0c7723125dd668b456a" target="_blank"><span className="radio-img-bg"></span> 
				</a></div> <div className="radio-info"><div className="radio-title">
				<a href="" target="_blank">七夜电台</a></div> <div className="radio-author">
				<a href="" target="_blank">主播&nbsp;/&nbsp;pianketing</a></div> 
				<div className="radio-others">45.8 m次播放</div></div></div>
				
				
				<div className="radio-cpt"><div className="radio-img">
				<img src="http://pkimg.image.alimmdn.com/upload/20160113/c42354a58d4270fb334134676180f24c.JPG" className="" /> 
				<img src="http://pkimg.image.alimmdn.com/upload/20160113/c42354a58d4270fb334134676180f24c.JPG" className="" /> 
				<img src="http://pkimg.image.alimmdn.com/upload/20160113/c42354a58d4270fb334134676180f24c.JPG" className="" /> 
				<a href="/pages/radio/radioInfo.html?id=5695ca1f72312503028b45c4" target="_blank"><span className="radio-img-bg"></span> 
				</a></div> <div className="radio-info"><div className="radio-title">
				<a href="/pages/radio/radioInfo.html?id=5695ca1f72312503028b45c4" target="_blank">片刻翻唱</a></div> <div className="radio-author">
				<a href="/pages/user/user.html?uid=550036" target="_blank">主播&nbsp;/&nbsp;pianketing</a></div> 
				<div className="radio-others">15.3 m次播放</div></div></div>
				
			</div>
		)
	}
}

export default Radiohot;