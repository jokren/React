import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux'

import $ from "jquery"
import "./indexradio.css"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            obj : {}
        }
    }

    vFor(arr){
        return arr.map((e, i) =>{
            return <div key={i}>{e}</div>
        })
    }

    render(){
        return (

            <div id="indexradio" className="main">
                <audio id="oaudio" src={this.state.obj.playsrc}>您的浏览器不支持 audio 标签。</audio>

                <div className="ting-info-box">
                    <div className="radio-info-content ting-info-content">
                        <div className="t-img">
                            <img src={this.state.obj.imgsrc} style={{width:"300px",height:"300px"}} alt=""/>
                        </div>
                        <div className="radio-info ting-info">
                            <div className="radio-title">
                                {this.state.obj.title}
                            </div>
                            <div className="ting-others">
                                2.4 k次播放  |  评论: 2  |  喜欢: 39
                            </div>
                            <div className="aors">
                                <div className="ting-author">
                                    主播:
                                    <a>{this.state.obj.anchor}</a>
                                </div>
                                <div className="article-author">
                                    原文:
                                    <a>{this.state.obj.original}</a>
                                </div>
                            </div>

                            <div className="play-all">
                                <div onClick={this.pauseaudio.bind(this)} className="btn-play play-status-btn">
                                    播放Ting
                                </div>
                                <div onClick={this.playaudio.bind(this)} className="btn-pause play-status-btn">
                                    暂停Ting
                                </div>
                            </div>

                            <div className="likes-cpt ting-like">

                            </div>
                            <div className="ting-share">
                                <div className="share-icon-cpt ting-share-icon">

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ting-article-content">
                        <div className="title-cpt">
                            原文
                        </div>
                        <div className="art-content">
                            <span style={{display: "block",paddingBottom: "10px"}}> - </span>
                            咖啡屋喧闹的一角独坐着一个老人，身子佝偻在桌边，面前端着一份报纸。在一副高龄的没落里，
                            他回想这一生享受的欢乐何其稀少，当他还强壮、健谈而且帅气的时候。他知道自己老了很多；
                            他能看得到，能感觉到。但他觉得年轻的时光好像就在昨天，就在倏忽之间，一切都如此短暂。
                            他想起“谨慎”对他的欺骗有多深，而他又如何一直疯狂地轻信着这样的匡骗：“明天吧。
                            你有的是时间。”他想起那些被扼杀掉的冲动，被他...
                            <span className="view-all">
                                <a >VIEW ALL <img src="http://qnstatic.pianke.me/public/assets/img/viewall.png" alt=""/></a>
                            </span>
                        </div>
                    </div>

                    <div className="article-comment">
                        <div className="comment-title-cpt">
                            <div>
                                评论 <span>(107 条)</span>
                            </div>
                        </div>
                        <div className="comment-list-group">
                            <div className="comment-cpt">
                                <div className="comment-user-icon">
                                    <a>
                                        <img src="http://hpimg.pianke.com/8b45aab71f63d339e1e1db44aef53f8c20170523.jpg?imageView2/2/w/90/format/jpg" alt=""/>
                                    </a>
                                </div>
                                <div className="comment-info">
                                    <div className="comment-user-info">
                                        <a>
                                            吕宏道
                                        </a>
                                        2018-4-16 22:45
                                        <span onClick={this.getreply.bind(this)} className="comment-reply">
                                            回复
                                        </span> <span onClick={this.addone.bind(this)} className="comment-number">0 </span>
                                        <span onClick={this.getConfirm.bind(this)} className="comment-del report">举报</span>
                                    </div>
                                    <div className="comment-content">
                                        就算冲动又如何，去做，别让自己后悔
                                    </div>

                                    <div className="Confirm" style={{display:"none"}}>
                                        <div>确认要举报吗？</div>
                                        <div className="btn-group" id="btn-group">
                                            <div onClick={this.puit.bind(this)}>取消</div>
                                            <div onClick={this.puit.bind(this)}>确认</div>
                                        </div>
                                    </div>

                                    <div className="com-textarea has-value" style={{display:"none"}}>
                                        <textarea placeholder="请输入回复内容"></textarea>
                                        <div className="btn-group" id="bg1">
                                            <div onClick={this.puitnone.bind(this)}  className="btn">发送</div>
                                            <div onClick={this.puitnone.bind(this)} className="btn-cancle">取消</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    puit(){
        $(".Confirm").css({display:"none"})
    }
    getConfirm(){
        $(".Confirm").css({display:"block"})
    }
    addone(){
        this.setState({
            addOne:this.state.addOne+1
        })
        if(this.state.addOne%2==0){
            $(".comment-number").text("0").css({color:"#999",backgroundImage:"url("+"https://qnstatic.pianke.me/public/assets/img/praise.png"+")"})

        }else {
            $(".comment-number").text("1").css({color:"#f5a623",backgroundImage:"url("+"https://qnstatic.pianke.me/public/assets/img/praiseH.png"+")"})

        }
    }
    //回复
    getreply(){
        var str=  $(".com-textarea").css("display")=="none"?"block":"none"
        $(".com-textarea").css({display:str})
        console.log(str);
    }
    puitnone(){
        $(".com-textarea").css({display:"none"})
    }
    playaudio(){
        $(".btn-pause").css({zIndex:-1})
        $(".btn-play").css({zIndex:3})
        $("#oaudio")[0].pause();

    }
    pauseaudio(){
        $(".btn-pause").css({zIndex:3})
        $(".btn-play").css({zIndex:-1})
        $("#oaudio")[0].play();
    }
    componentDidMount(){
        //播放autoplay
        $("#oaudio").attr({autoplay:"autoplay"})

        var word = this.props.state.radioname;
        console.log(this.props.state.radioname);
        var url = "http://localhost:8888/indexradio"
        this.serverRequest = $.post(url, function(result){
            var res = JSON.parse(result)
            for(var i = 0; i < res.length; i++){
                if(res[i].title == word){
                    this.setState({
                        obj : res[i]
                    });
                    var str = JSON.stringify(res[i])
                    console.log(str);
                    window.sessionStorage.setItem('indexradio', str);
                }
            }
        }.bind(this));
        var obj = JSON.parse(window.sessionStorage.getItem('indexradio') || '{}');
        this.setState({
            obj : obj
        });

    }

    componentWillUnmount(){
        this.serverRequest.abort();
    }

}


export default connect((state) =>{
    // console.log(state)
    return {
        state
    }
}, (dipatch) =>{
    return {
        getname(){
            dipatch({})
        }
    }
})(App);
