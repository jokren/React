import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux'

import "./indexread.css"
import $ from "jquery"

//导入组件


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr : {},
            addOne:0
        }
    }

    render(){
        return (
            <div id="indexread">
                <div className="index-content maintwo">
                    <div className="article-header-info">
                        <div className="article-type">
                            <a>自由写作</a>
                        </div>
                        <div className="article-title">
                            {this.state.arr.title}
                        </div>
                        <div className="article-others">
                            <a>
                                <img src={this.state.arr.otherimg} alt=""/> <i> {this.state.arr.other}</i>
                            </a>
                            <span>
                                2016-3-8 18:55  |  阅读时间: 6min  |  阅读次数: {this.state.arr.num} k
                            </span>
                        </div>
                    </div>
                    <div className="art-content">
                        <p>
                            <img src={this.state.arr.src} alt=""/>
                        </p>
                        <p>
                            文/{this.state.arr.other}
                        </p>
                        <p>&nbsp; </p>
                        <p>01</p>
                        <p>{this.state.arr.text1}</p>
                        <p>{this.state.arr.text2}</p>
                        <p>&nbsp; </p>
                        <p>02</p>
                        <p>2012年，陶喜大学毕业，处了四年的大学男友去了新加坡，远山远海的异地恋正是最难熬的时候，陶喜在中山路的拐角遇见李云晖。</p>
                        <p>陶喜那时才知道李云晖来广州工作了，在一家饮水机工厂，三班倒制，今天下了早班出来走走，没想到会遇见陶喜。</p>
                        <div className="art-war">
                            <div className="article-warn">
                                *此文章为原创作品，非商业使用转载务必保留本文地址及原作者，商业使用请联系
                                <a>片刻网</a>

                            </div>
                            <span className="report">举报</span>
                        </div>
                        <div className="article-handle">
                            <div className="likes-cpt">
                                450
                            </div>
                            <div className="share-cpt">
                                <div className="share-sina"></div>
                                <div className="share-wechat">
                                    <div className="code">
                                        <img width="200" src="http://api5.pianke.me/version5.0/wxshare/qrcode.php?url=http%3A%2F%2Fpianke.me%2Fversion4.0%2Fweixin02%2Fwxshare.php%23!%2Farticle%2F56deaf9f5e774367348b45c3" alt=""/>
                                    </div>
                                </div>
                                <div className="share-qzone"></div>
                                <div className="share-dou"></div>
                            </div>
                        </div>

                        <div className="is-login-cpt">
                            <div className="if-no-login" style={{display : "none"}}>
                                快来
                                <a>登录</a>
                                发表你的精彩评论啦
                            </div>
                            <div className="is-login">
                                <textarea placeholder="发表你的精彩评论啦" ></textarea>
                                <div  className="btn">
                                    发表评论
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="acle-comment">
                        <div className="comment-title-cpt">
                            <div>
                                评论 <span>(107 条)</span>
                            </div>
                        </div>
                        <div className="comment-list-group">
                            <div className="comment-cpt">
                                <div className="comment-user-icon">
                                    <a>
                                        <img src={this.state.arr.commentsrc} alt=""/>
                                    </a>
                                </div>
                                <div className="comment-info">
                                    <div className="comment-user-info">
                                        <a>
                                            {this.state.arr.commentname}
                                        </a>
                                        2018-4-16 22:45
                                        <span onClick={this.getreply.bind(this)} className="comment-reply">
                                            回复
                                        </span> <span onClick={this.addone.bind(this)} className="comment-number">0 </span>
                                        <span onClick={this.getConfirm.bind(this)} className="comment-del report">举报</span>
                                    </div>
                                    <div className="comment-content">
                                        {this.state.arr.commenttext}
                                    </div>

                                    <div className="Confirm" style={{display:"none"}}>
                                        <div>确认要举报吗？</div>
                                        <div className="btn-group" id="btn-group">
                                            <div onClick={this.puit.bind(this)}>取消</div>
                                            <div onClick={this.puit.bind(this)}>确认</div>
                                        </div>
                                    </div>

                                    <div className="com-textarea has-value" style={{display:"none"}}>
                                        <textarea id="txtval" placeholder="请输入回复内容"></textarea>
                                        <div className="btn-group">
                                            <div onClick={this.pullnone.bind(this)}  className="btn">发送</div>
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
    pullnone(){
      var val=$("#txtval").val()
       var name=window.sessionStorage.getItem("u_name")
        var newdiv=$("<div></div>")
        newdiv.addClass("comment-content-others")
        var newa=$("<a></a>")
        newa.text(name)
        var newspan=$("<span></span>")
        newspan.text("删除")
        newspan.addClass("comment-del")
        newdiv.text(val)
        newa.appendTo(newdiv)
        newspan.appendTo(newdiv)
        newdiv.appendTo($(".comment-info"))
        //实现删除
        newspan.on("click",function(){
            newdiv.remove()
        })
        $(".com-textarea").css({display:"none"})
    }


    componentDidMount(){
        var word = this.props.state.hoverword;
        var url = "http://localhost:8888/indexread"
        this.serverRequest = $.post(url, function(result){
            var res = JSON.parse(result)
            for(var i = 0; i < res.length; i++){
                if(res[i].title == word){
                    this.setState({
                        arr : res[i]
                    });
                    var str = JSON.stringify(res[i])
                    window.sessionStorage.setItem('indexread', str);
                }
            }
        }.bind(this));
        var obj = JSON.parse(window.sessionStorage.getItem('indexread') || '[]');
        this.setState({
            arr : obj
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
        getstate(){
            dipatch({})
        }
    }
})(App);
