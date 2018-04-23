import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux'

import "./footer.css"
import "jquery"
class footer extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className="back-top"></div>
            <footer>
            <div className="foot">
                <div className="foot-logo"></div>
                <div className="foot-link"><span>
                    <a href="javascript:;">关于我们</a>
                    <a href="javascript:;" target="_blank">友情链接</a>
                    <a href="javascript:;" target="_blank">片刻帮助</a>
                    <a href="javascript:;" target="_blank">意见反馈</a>
                    <a href="javascript:;" target="_blank">成长记忆</a><br /></span>
                    <span>All rights reserved © 2016 pianke.me /蜀ICP备12022689号-1</span>
                </div>
                <div className="foot-icon">
                    <div className="foot-app">
                        <a href="javascript:;"></a></div>
                    <div className="foot-weibo">
                        <a href="javascript:;" target="_blank"></a>
                    </div>
                    <div className="foot-wechat"><div></div></div>
                    <div className="foot-safe">
                        <a target="_blank" href="javascript:;"></a>
                    </div>
                </div>
            </div>
            </footer>
            </div>
        );
    }
}


export default connect((state) => {
    // console.log(state)
    return {
        state
    }
}, (dipatch) => {
    return {
        getstate(){
            dipatch({

            })
        }
    }
})(footer);
