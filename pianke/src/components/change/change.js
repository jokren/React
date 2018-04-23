import React, {
	Component
} from 'react';
import { connect } from "react-redux"
import "./change.css"
import  $ from  "jquery"
import  user from  "../login/userxinxi"
class change extends Component {
	render() {
		return (
			<div className="container">
				<div className="set-cpt"><div className="login-warn"></div>
					<div className="set-title">1111</div>
					<div className="login-input">
						<input className="change" type="text"  placeholder="请输入手机号" />
						<input className="change" type="text"  placeholder="请输入修改后密码" />
						<input className="change" type="text"  placeholder="确认密码" />
					</div>
					<div className="btn">发送验证</div></div></div>
		);
	}
	componentDidMount(){
		$(".head .navbar li").removeClass("active")
		require("./changejs")()
	}
}



export default connect((state) => {
	console.log(state)
	return {
		state
	}
}, (dipatch) => {
	return {
		testClick() {
			dipatch({
			
			})
		}
	}
})(change);
