import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux'

import $ from "jquery"
import "./read.css"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr : [{title:"年华",name:"盗梦的益安",content:" 1.再结婚一次，当下的安稳。只拍一组白纱做纪念。怀孕已三月，也不见胖，涨点年纪是韵味，挽着G先生的手，不输那些年轻男女。到这个年纪再婚，条件不用列举彼此心里都有",
             read:"3.4",comment:"38",link:"111",back:"http://hpimg.pianke.com/92a75c703093606dc4c0f14f7484563620170426.jpg?imageView2/2/w/640/format/jpg"
            },{title:"偷心",name:"子夜晨星",content:" -001-她说：“我要去偷一个东西，你帮我好不好？”她说这句话的时候，没有一点求我办事的语气，反而有些趾高气扬，不可一世的狂傲。我当时正躺在草地上晒太阳，没好气  ",
                read:"2.7",comment:"24",link:"118",back:"http://hpimg.pianke.com/2d926883da0fb830cb9950b57a22149820170426.jpg?imageView2/2/w/640/format/jpg"
            },{title:"友人集|与风眠，与你告别和重逢",name:"南逢酒馆",content:" —— 离别，也是重逢——阿簌在电话里对我说，前一天晚上做了一个梦，梦里有我，醒来觉得很挂念，就很想跟我说说话。原来，梦里梦见的人就去见吧，这种俗气的理是真的。这 ",
                read:"2.1",comment:"7",link:"31",back:"http://hpimg.pianke.com/1aaba7a9769d62f9e1b9c42464272b3b20171120.jpg?imageView2/2/w/640/format/jpg"
            }]
        }

    }

    vFor(arr){
        return arr.map((e, i) =>{
            return <div key={i} className="article-cpt">
                <div className="left">
                    <div className="article-title">
                        <a onClick={this.props.gettitle} href="#/indexread">{e.title}</a>
                    </div>
                    <div className="article-author">
                        <a>By /{e.name}</a>
                    </div>
                   <div className="article-content">
                       {e.content}&nbsp;&nbsp;
                       <span className="view-all">
                           <a href="#/indexread" onClick={this.props.getdivtitle}> VIEW ALL
                             <img src="http://qnstatic.pianke.me/public/assets/img/viewall.png" alt=""/>
                          </a>
                       </span>
                   </div>
                    <div className="chenkart-others">
                        {e.read} k次阅读  |  评论:{e.comment}  |  喜欢:{e.link}
                    </div>
                </div>
                <div className="right" style={{backgroundImage:"url("+e.back+")"}}>
                    <a></a>
                </div>
            </div>
        })
    }

    render(){
        return (

            <div id="read" className="main">
                <div id="title">
                    阅读&nbsp;|&nbsp;read
                </div>
                <div>
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
        gettitle(e){
            var word=$(e.target).text();
            dipatch({
                type:"ABC",
                hoverword:word
            })
        },
        getdivtitle(e){
            var word=$(e.target).parents(".left").find(".article-title").children("a").text()
            dipatch({
                type:"ABC",
                hoverword:word
            })
        }
    }
})(App);
