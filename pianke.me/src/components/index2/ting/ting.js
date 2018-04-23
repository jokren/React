import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux'

import $ from "jquery"
import "./ting.css"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr : [{
                src : "http://hpimg.pianke.com/0bf77448922fc99dede2466d71430ddd20180130.jpeg?imageView2/2/w/640/format/jpg",
                title : "老人｜卡瓦菲斯", name : "许邻", play : 2.4, comment : 2, link : 39
            }, {
                src : "http://hpimg.pianke.com/b932337326b53587ab49a16d5661619b20180129.jpg?imageView2/2/w/640/format/jpg",
                title : "那份笨拙的爱，是心底最柔软的刺", name : "你好南望", play : 7.6, comment : 32, link : 275
            }, {
                src : "http://hpimg.pianke.com/44a9f10c70efce7b773c17c054ef8e3c20180120.png?imageView2/2/w/640/format/jpg",
                title : "“我从来不想独身，却有预感晚婚”", name : "树茵", play : 3.9, comment : 9, link : 99
            }]
        }

    }

    vFor(arr){
        return arr.map((e, i) =>{
            return <div key={i} className="ting-cpt">
                <div onClick={this.props.getname.bind(this)} className="ting-img">
                    <a href="#/indexradio">
                        <img src={this.state.arr[i].src} alt=""/> <span> </span>
                    </a>
                </div>
                <div className="ting-info">
                    <div className="ting-title">
                        <a>
                            {e.title}
                        </a>
                    </div>
                    <div className="ting-author">
                        <a>
                            主播 / {e.name}
                        </a>
                    </div>
                    <div className="ting-others">
                        {e.play} k次播放 | 评论:{e.comment} | 喜欢:{e.link}
                    </div>
                </div>
            </div>
        })
    }

    render(){
        return (

            <div id="ting" className="main">
                <div id="title">
                    TING
                </div>
                <div className="ting-list">
                    {this.vFor(this.state.arr)}
                </div>
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
        getname(e){
            var $name=$(e.target).parents(".ting-cpt").find(".ting-title").children("a").text();
            dipatch({
                type:"ABC",
                radioname:$name
            })
        }
    }
})(App);
