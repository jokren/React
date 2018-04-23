import React, {Component} from 'react';
import {Route, Link} from "react-router-dom";
import {connect} from 'react-redux'


import "./morecontent.css"

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr : [{
                src1 : "http://hpimg.pianke.com/44f3b0492213db58c75c5ad5a790db5920180301.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "其实我一个朋友也没有。",
                username : "半岛玫瑰", type : "Ting", play : 31.1,
                comment : 344, like : "1.2k",
                src2 : "http://hpimg.pianke.com/86dc2848b247c367e417cad43d7b648520170220.png?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/13ecdf92e918808102efcb0530c66bc720180301.jpeg?imageView2/2/w/640/format/jpg",
                cardtitle : "拜个晚年——愿你我都活成自己的角儿。",
                username : "许邻", type : "Ting", play : 4.5,
                comment : 5, like : 65,
                src2 : "http://pkicon.image.alimmdn.com/icon/20161003/7f19241ba4367489706f8fa4a43ff967.png@90w_90h_1e_1c_85Q.jpg"
            }, {
                src1 : "http://hpimg.pianke.com/fdacf9abd8726b76d6dd0411e028937e20180301.gif",
                cardtitle : "珍惜眼前人，心中无黄昏",
                username : "NJ文珂", type : "Ting", play : 16.1,
                comment : 18, like : 347,
                src2 : "http://pkicon.image.alimmdn.com/icon/20160907/441717d411c7d384777b04bdf491513a.png@90w_90h_1e_1c_85Q.jpg"
            }, {
                src1 : "http://hpimg.pianke.com/4723449722c5be584e040402fea0d2c420180215.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "Mystery of love(翻唱)",
                username : "洛一德", type : "Ting", play : 8.1,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/001307ec85a47d4f610f78934c5bed6920171226.png?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/f9270fcc93c750a56ff98e51b79e4cba20180211.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "去纽约",
                username : "阿见", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/8b29dc859b74cb196f7b071ab94470d820170126.jpg?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/b322542401096f388cbddee4f97e610b20180128.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "陆深翻唱 - 爱如潮水",
                username : "阿见", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/8b29dc859b74cb196f7b071ab94470d820170126.jpg?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/dfe4dff5130b18e884c0a3a149eb6d4d20171229.png?imageView2/2/w/640/format/jpg",
                cardtitle : "相期以茶02--The Rose",
                username : "阿见", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/8b29dc859b74cb196f7b071ab94470d820170126.jpg?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/342d77f55b703fe2909beca4315e065120180101.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "这是适用一整年的表白指南",
                username : "阿见", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://hpimg.pianke.com/8b29dc859b74cb196f7b071ab94470d820170126.jpg?imageView2/2/w/90/format/jpg"
            }, {
                src1 : "http://hpimg.pianke.com/378d9a108b6fd99070e8d787b820058a20171227.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "你与太阳不能直视",
                username : "阳芷的时光", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://pkimg.image.alimmdn.com/upload/20170721/1d91482cc6be84c406465f17f4c8299a.jpg@90w_90h_1e_1c_85Q.jpg"
            }, {
                src1 : "http://hpimg.pianke.com/13ecdf92e918808102efcb0530c66bc720180301.jpeg?imageView2/2/w/640/format/jpg",
                cardtitle : "拜个晚年——愿你我都活成自己的角儿",
                username : "阳芷的时光", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://pkimg.image.alimmdn.com/upload/20170721/1d91482cc6be84c406465f17f4c8299a.jpg@90w_90h_1e_1c_85Q.jpg"
            }, {
                src1 : "http://hpimg.pianke.com/7be03651519fabdbbc21e066ee44a65420170906.jpeg?imageView2/2/w/640/format/jpg",
                cardtitle : "路过你的七月",
                username : "阳芷的时光", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://pkimg.image.alimmdn.com/upload/20170721/1d91482cc6be84c406465f17f4c8299a.jpg@90w_90h_1e_1c_85Q.jpg"
            }, {
                src1 : "http://hpimg.pianke.com/f9270fcc93c750a56ff98e51b79e4cba20180211.jpg?imageView2/2/w/640/format/jpg",
                cardtitle : "去纽约",
                username : "阳芷的时光", type : "Ting", play : 5.2,
                comment : 30, like : 294,
                src2 : "http://pkimg.image.alimmdn.com/upload/20170721/1d91482cc6be84c406465f17f4c8299a.jpg@90w_90h_1e_1c_85Q.jpg"
            }],
            choicebool:true,
            loadingbool:true
        }

    }

    vFor(arr){
        return arr.map((e, i) =>{
            return <div key={i} className="item">
                <div className="card-top-img">
                    <a>
                        <img src={e.src1} alt=""/> <span></span>
                    </a>
                </div>
                <div className="card-item">
                    <div className="card-ting-title">
                        <a>{e.cardtitle}</a>
                    </div>
                    <div className="user-sign">
                        <a>主播 / {e.username}</a>
                    </div>
                    <div className="card-others">
                        <span className="card-type">
                            <a>{e.type}</a>
                        </span> <span>{e.play} k次播放  |  评论: {e.comment} |  喜欢:{e.like}</span>
                    </div>
                    <div className="card-user">
                        <div className="card-user-info">
                            <a>
                                <img src={e.src2} alt=""/> {e.username}
                            </a>
                        </div>
                        <div className="card-likes likes-cpt"></div>
                    </div>
                </div>
            </div>
        })
    }
    getblock(){
        this.setState({
            choicebool:false,
            loadingbool:false
        })

        //瀑布流
        function getMinIndex(tempArr){
            var minIndex = 0;
            var minArr = tempArr[0];//加上最小的是 第一个
            for(var i = 0; i < tempArr.length; i++){
                if(tempArr[i] < minArr){
                    minArr = tempArr[i];
                    minIndex = i;
                }
            }
            return minIndex;
        }

        var self=this
           setTimeout(function(){

               self.setState({
                   loadingbool:true
               })

               //开始实现瀑布流
               var oItem = document.getElementsByClassName("item");
               // console.log(oItem);
               var arr = [];
               for(var i = 0; i < oItem.length; i++){
                   if(i < 4){
                       arr.push(oItem[i].offsetHeight);//把前面4个的高度添加到数组
                       // console.log(arr);
                   } else {
                       // 需要从数组中找到最 矮的那高度
                       var minIndex = getMinIndex(arr);//找到最小的索引
                       oItem[i].style.position = "absolute";//加定位
                       oItem[i].style.top = arr[minIndex]+ (Math.floor(i/4)*5)+ "px";  //top的位置
                       oItem[i].style.left = oItem[i].offsetWidth * minIndex+(minIndex*5) + "px";
                       //把最矮高度，改变
                       arr[minIndex] = arr[minIndex] + oItem[i].offsetHeight;
                   }
               }
           },10)


    }

    render(){
        return (
            <div>
                <div onClick={this.getblock.bind(this)} className="more-botton" style={{display:this.state.choicebool?"block":"none"}}>
                    <div className="btn-box">
                        <div className="btn btn-more  ">
                            查看更多精选内容
                        </div>
                    </div>
                </div>
                <div id="more-content" className="bigmain" style={{display:this.state.choicebool?"none":"block"}}>
                    <div className="past-content-title">
                        <div className="title-cpt">
                            往期精选
                        </div>
                    </div>
                    <div className="img-group-cpt">
                        {this.vFor(this.state.arr)} {this.vFor(this.state.arr)} {this.vFor(this.state.arr)} {this.vFor(this.state.arr)} {this.vFor(this.state.arr)}
                    </div>
                </div>

            </div>
        );
    }

    componentDidMount(){

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
