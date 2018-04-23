import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux'

import $ from "jquery"
import "./hoverimg.css"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            arrImg : ["http://hpimg.pianke.com/25c4460266d120ed5536c854a84e8ea620171012.jpg?imageView2/2/w/640/format/jpg",
                "http://hpimg.pianke.com/2918689193578579208adf3bbeb839ff20171012.jpg?imageView2/2/w/640/format/jpg",
                "http://hpimg.pianke.com/83cb6cc4014a86a4858116244546102820171012.jpg?imageView2/2/w/640/format/jpg",
                "http://hpimg.pianke.com/a4c7ed5503e463c747a3c9bc768c784620171012.jpg?imageView2/2/w/640/format/jpg",
                "http://hpimg.pianke.com/10ec7bfffb06c90f7d36421df5afaebf20170321.jpg?imageView2/2/w/640/format/jpg"
            ],
            arrWords : ["坚持绘画147天，这些意想不到的事情发生了",
                "喜欢《悟空传》的燃，是因为《西游记》太丧",
                "毕业三年，写给自己的25句忠告",
                "暗恋这条路，道阻且长",
                "这样锻炼，你才会掌握说话的力量"
            ]
        }
    }

    render(){
        return (

            <div id="hoverImg" className="main">
                <div id="img1" onClick={this.props.getwordtxt}>
                    <a href="#/indexread">
                        <img className="img2" src={this.state.arrImg[0]} alt="" width="100%"/> <span id="sp1">
                        </span> <span id="sp2">{this.state.arrWords[0]}</span>
                    </a>
                </div>

                <ul id="oul">
                    <li className="allimg" onClick={this.props.getword}>
                        <a href="#/indexread">
                            <img className="img2" src={this.state.arrImg[1]} alt="" width="100%"/> <span id="sp1">
                                 </span> <span id="sp2">{this.state.arrWords[1]}</span>
                        </a>
                    </li>
                    <li className="allimg" onClick={this.props.getword}>
                        <a href="#/indexread">
                            <img className="img2" src={this.state.arrImg[2]} alt="" width="100%"/> <span id="sp1">
                                 </span> <span id="sp2">{this.state.arrWords[2]}</span>
                        </a>
                    </li>
                    <li className="allimg" onClick={this.props.getword}>
                        <a href="#/indexread">
                            <img className="img2" src={this.state.arrImg[3]} alt="" width="100%"/> <span id="sp1">
                                 </span> <span id="sp2">{this.state.arrWords[3]}</span>
                        </a>
                    </li>
                    <li className="allimg" onClick={this.props.getword}>
                        <a href="#/indexread">
                            <img className="img2" src={this.state.arrImg[4]} alt="" width="100%"/> <span id="sp1">
                                 </span> <span id="sp2">{this.state.arrWords[4]}</span>
                        </a>
                    </li>
                </ul>


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
        getword(e){
            var word=$(e.target).parents("li").find("#sp2").text();
            dipatch({
                type : "ABC",
                hoverword:word
            })
        },
        getwordtxt(e){
            var word=$(e.target).parents("#img1").find("#sp2").text();
            dipatch({
                type : "ABC",
                hoverword:word
            })
        }
    }
})(App);
