import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux'

import "./index2.css"
//导入组件
import HoverImg from "./hoverImg/hoverimg"
import Read from "./read/read"
import Ting from "./ting/ting"
import Tot from "./hot/hot"
import Morecontent from "./choice/morecontent"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div id="index2">
                <HoverImg/>
                <Read/>
                <Ting/>
                <Tot/>
                <Morecontent/>
            </div>
        );
    }
}


export default connect((state) =>{
    // console.log(state)
    return {
        state
    }
}, (dipatch) =>{
    return {
        getstate(){
            dipatch({})
        }
    }
})(App);
