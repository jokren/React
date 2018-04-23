import React, { Component } from 'react';
import { Route,Link } from "react-router-dom";
import {connect} from 'react-redux';
import $ from "jquery";
import "./container.css";
class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
            bool:true,
            length:"",
            vtext:"",
            dataArr:[{
                src:"http://hpimg.pianke.com/51028c5868588b9d42f269c12d75e88b20180418.jpg",
                cont:"我的人还没开始呢",
                name:"千秋威",
                p_src:"http://thirdqq.qlogo.cn/qqapp/100339551/ED17C96515215FF1A841E13F56EA9F4A/100"
            },{
                src:"",
                cont:"今年刷微博又有很多高考鼓励了，但是去年这时候我高考，觉得这些话是真的微不足道。甚至还特别不爽，凭什么你们的一句话这么简单讲出来。现在我觉得你们应该带着情感的吧。",
                name:"滑毛",
                p_src:"http://hpimg.pianke.com/a1eadb10e645f1350a19c6ecc52f869220180412.jpg?imageView2/2/w/90/format/jpg"
            },{
                src:"",
                cont:"又是一个不眠夜，昨晚的那个电话，心彻底的被你碾碎，那句他在等我，将所有的一切都带走了！包括三年的感情！",
                name:"玖零叁",
                p_src:"http://pkicon.image.alimmdn.com/icon/20160611/fc75b056bde92314c0474d37be6303ad.png@90w_90h_1e_1c_85Q.jpg"
            },{
                src:"http://hpimg.pianke.com/9d6921ef149ce2b98a07295afb73bd4d20180418.jpg",
                cont:"🎈 【早安】做一个明媚的女子 不倾城 不倾国只倾其所有过自己想要的生活",
                name:"森屿海巷@🍓",
                p_src:"http://hpimg.pianke.com/90f2544d8df0424dcec8f6f038b8b3a020171112.jpg?imageView2/2/w/90/format/jpg"
            },{
                src:"http://hpimg.pianke.com/bd352bc0f3815e96b198351e344a5b7d20180418.jpg",
                cont:"贴吧漏签了一天心痛，继续签到。ps减肥第三天，其实什么也没发生",
                name:"nashinishu...",
                p_src:"http://pkicon.image.alimmdn.com/icon/20161001/2169ba4e294cdb1ac27e85cc834f758a.jpg@90w_90h_1e_1c_85Q.jpg"
            },{
                src:"http://hpimg.pianke.com/13d86181083903e4d256e76c05dd70b320180418.png",
                cont:"惊晓漏，护春眠。格外娇慵只自怜。寄语酿花风日好，绿窗来与上琴弦。",
                name:"特立独行的小艾",
                p_src:"http://hpimg.pianke.com/70907bc3ee7b29f690b29a2d705182da20180307.png?imageView2/2/w/90/format/jpg"
            },{
                src:"http://hpimg.pianke.com/1cd2101c0b93a60b586ab3e8fad0690920180418.jpg",
                cont:"妓多不压身😍😍",
                name:"永桢",
                p_src:"http://hpimg.pianke.com/84c537219b8320323623f47b12630ce520180414.jpg?imageView2/2/w/90/format/jpg"
            },{
                src:"",
                cont:"对着昨天他发过来的两张照片，傻傻地笑了半天😊😊😊",
                name:"小小沙粒",
                p_src:"http://hpimg.pianke.com/2c2dd771cc1b43f65c989764b2f6559120180224.jpg?imageView2/2/w/90/format/jpg"
            }]
        }
    }
    changeAll(e){
        this.setState({
            bool:this.state.bool
        });
        console.log(e.target);
        if(this.state.bool) {
            $(e.target).addClass("activei").siblings().removeClass("activei");
        };
        if($(e.target).text()==="公开"){
            $("textarea").attr({
                placeholder:"这一刻，你想说什么?"
            });
            $(".timelineBtn").text("发布碎片");
        }else{
            $("textarea").attr({
                placeholder:"以匿名的方式倾诉，我们会将你的秘密随机推送给5位陌生人"
            });
            $(".timelineBtn").text("匿名发布");
        }
    }
    chooseTag(e){
        this.setState({
            vtext:e.target.text,
            bool:!this.state.bool
        })
        if(this.state.bool) {
            console.log(this.state.bool);
            $(".tag-drop").css({
                display:"block"
            })
        }else{
            $(".tag-drop").css({
                display:"none"
            })
        }
    }
    getValue(e){
        this.setState({
            length:e.target.value.length
        })
    }
    showTag(e){
        this.setState({
            bool:!this.state.bool
        });
        if(this.state.bool) {
            console.log(this.state.bool);
            $(".tag-drop").css({
                display:"block"
            })
        }else{
            $(".tag-drop").css({
                display:"none"
            })
        }
    }
    uploadAll(){
        console.log($("textarea").val());
        if($("textarea").val()==""){
            alert("请先填写内容")
        }else{
            if(window.sessionStorage.getItem("u_tel")==undefined){
                alert("请先登录")
            }else{
                $.ajax({
                    url: 'http://localhost:8888/setuser/getimg',
                    type: 'POST',
                    cache: false, //不必须
                    data: {
                        u_photo:new FormData($('#timeline')[0]),
                        u_tel:window.sessionStorage.getItem("u_tel"),
                        u_cont:$("textarea").val()
                    },
                    processData: false,
                    contentType: false,
                    success: function(data) {
                        console.log(data);
                        $.ajax({
                            url:'http://localhost:8888/uploads',
                            type:"POST",
                            data: {
                                u_photo:'http://localhost:8888/' + data,
                                u_tel:window.sessionStorage.getItem("u_tel"),
                                u_cont:$("textarea").val(),
                                u_img:""
                            },
                            success:function (res) {
                                console.log("发布成功");
                            }
                        })
                    }
                })
            }
        }

    }
    vFor(arr){
        var htmlArr =arr.map((e,i)=>{
            return <div key={i} className="card-timeline-cpt" style={{
                position:'static',
                float:'left'
            }}>
                {((src)=>{
                    if(src!=""){
                        return <div className="card-top-img" style={{height: '290px'}}>
                                    <a href="javascript:void(0)" target="_blank">
                                        <img src={e.src} className="lazy loaded" />
                                    </a>
                                </div>
                    }else{
                        return <div className="card-top-img" style={{
                            height: '290px',
                            display:'none'
                        }}>
                                    <a href="javascript:void(0)" target="_blank">
                                        <img src={e.src} className="lazy loaded" />
                                    </a>
                                </div>
                    }
                })(e.src)}

                        <div className="card-item">
                            <div className="card-content">
                                <a href="javascript:void(0)" target="_blank">{e.cont}</a>
                            </div>
                            {/*<div class="timeline-voice" style="display: none;">*/}
                                {/*<a href="javascript:void(0)" target="_blank">[&nbsp;语音&nbsp;]</a>*/}
                            {/*</div>*/}
                            {/*<div class="user-sign" style="display: none;"><a>#&nbsp;&nbsp;#</a></div>*/}
                            <div className="card-user">
                                <div className="card-user-info">
                                    <a href="javascript:void(0)" target="_blank" className="">
                                        <img src={e.p_src} width=""/>{e.name}
                                    </a>
                                </div>
                                <div className="likes-cpt card-likes"></div>
                            </div>
                        </div>
                 </div>
        });
        return htmlArr;
    }
    render() {
        return (

            <div className="ok">
                <div className="publish-time">
                    <div className="nowdate">
                        <span>{(()=>{
                            var date=new Date();
                            return date.getDate()
                        })()}</span>
                        <span className="dateEng">{(()=>{
                            var date=new Date();
                            var m= date.getMonth()+1;
                            switch(m){
                                case 1:
                                    return 'January';
                                    break;
                                case 2:
                                    return 'February';
                                    break;
                                case 3:
                                    return 'March';
                                    break;
                                case 4:
                                    return 'April';
                                    break;
                                case 5:
                                    return 'May';
                                    break;
                                case 6:
                                    return 'June';
                                    break;
                                case 7:
                                    return 'July';
                                    break;
                                case 8:
                                    return 'Aguest';
                                    break;
                                case 9:
                                    return 'September';
                                    break;
                                case 10:
                                    return 'October';
                                    break;
                                case 11:
                                    return 'November';
                                    break;
                                case 12:
                                    return 'December';
                                    break;

                            }
                        })()}</span>
                    </div>
                    <div className="publish-content">

                        <textarea maxLength="140" placeholder="这一刻，你想说什么？"onChange={this.getValue.bind(this)}></textarea>
                        <div className="timeLine-others">
                            <div className="timelineType">
                                <span onClick={this.changeAll.bind(this)} className="activei">公开</span>
                                <span onClick={this.changeAll.bind(this)}>秘密</span>
                            </div>
                            <div className="upload-img">
                                图片
                                <form action="" id="timeline">
                                <input type="file" accept="image/gif,image/jpg,image/png" name="logo" id="imgFile"/>
                                </form>
                                <div className="imgDiv" style={{display:'none'}}>
                                    <div className="uploadImg">
                                        <span width="130px" style={{display:'none'}}></span>
                                    </div>
                                    <img src="http://qnstatic.pianke.me/public/assets/img/closeUpImg.png" className="closeUp" style={{display:$("#imgFile").val()!=null?'block':'none'}}/>
                                </div>
                            </div>
                            <div className="timelineTag">
                                <div  className="tag-icon" onClick={this.showTag.bind(this)}>{((vt)=>{
                                    if(vt==""){
                                        return "添加标签"
                                    }else{
                                        return vt;
                                    }
                                })(this.state.vtext)}</div>
                                <div className="tag-menu">
                                    <div className="tag-drop" id="tagNum" style={{display:"none"}}>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>悄悄话</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>戳心歌词</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>一见钟情的句子</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>电影截图+经典台词</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>黑白大片</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>最美摘抄</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>旧书摊</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>看图片猜身高</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>三行情书</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>给力头像都在这</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>自拍狂魔</a></div>
                                        <div className="tag-cpt"><a onClick={this.chooseTag.bind(this)}>给诗歌配图</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="timelineBtn btn" onClick={this.uploadAll.bind(this)}>发布碎片</div>
                            <div className="timelineNum">
                                <span>{function (v) {
                                    if(v==""){
                                        return 0;
                                    }else{
                                        return v;
                                    }
                                }(this.state.length)}</span><span>/140</span><span>字</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="titleCpt">热门标签</div>
                    <div className="timelineList">
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/978b2fe39436aca13338894a2c862f27.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">悄悄话</span>
                                <span className="typeDes">76663个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/4a62a188b2d203cf32acf4d5b2fa9ca2.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">戳心歌词</span>
                                <span className="typeDes">7952个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/dbbf9e47457a9858d58e1ea19d2238f6.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">一见钟情的句子</span>
                                <span className="typeDes">67624个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/c7ecd8adcd43f125118bf66edf101d47.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">电影截图+经典台词</span>
                                <span className="typeDes">14352个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/77975f3100b4bcdae2672cefbc078208.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">黑白大片</span>
                                <span className="typeDes">5663个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/ff1b00e3d2211ad5a69d58609f094a36.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">最美摘抄</span>
                                <span className="typeDes">41561个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/a873dfff3750461e8e0ffb0f1538260a.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">旧书摊</span>
                                <span className="typeDes">7123个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/e67ba528fa42ff9c9c596438ca8a6a66.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">看图片猜身高</span>
                                <span className="typeDes">5131个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/1d43cf1c5353d2ab670fa8d9660356b4.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">三行情书</span>
                                <span className="typeDes">11657个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/17369554b8a66e9fce46c4b954fee24c.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">给力头像都在这</span>
                                <span className="typeDes">3611个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/242e213f7ace24f2c1bfb5a59a3e1f8b.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">自拍狂魔</span>
                                <span className="typeDes">7796个</span>
                            </a>
                        </div>
                        <div className="articleTypeCpt">
                            <a>
                                <img src="http://qnstatic.pianke.me/tagpic/826ad7855d2f45a6f417ab35ac2e5d22.jpg" alt=""/>
                                <span className="typeBg"></span>
                                <span className="typeTitle">给诗歌配图</span>
                                <span className="typeDes">1115个</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="titleCpt">全部碎片</div>
                    <div className="imgGroup" id="ImgGroup">
                        {this.vFor(this.state.dataArr)}{this.vFor(this.state.dataArr)}{this.vFor(this.state.dataArr)}
                    </div>
                </div>
            </div>


        );
    }
    componentDidMount(){
        window.onload = function () {

            //开始实现瀑布流

            var oItem = document.getElementsByClassName("card-timeline-cpt");
            var arr = [];
            for (var i = 0; i < oItem.length; i++) {
                if (i < 4) {

                    arr.push(oItem[i].offsetHeight);//把前面3个的高度添加到数组

                    console.log(arr);
                } else {
                    // 需要从数组中找到最 矮的那高度
                    var minIndex = getMinIndex(arr);//找到最小的索引

                    oItem[i].style.position = "absolute";//加定位
                    oItem[i].style.top = arr[minIndex] + "px";  //top的位置
                    oItem[i].style.left = oItem[i].offsetWidth * minIndex + "px";

                    // oItem[i].style.marginRight="10px";
                    //把最矮高度，改变
                    arr[minIndex] = arr[minIndex] + oItem[i].offsetHeight;
                }
            }

        }

        //找最矮高度的啊函数
        function getMinIndex(tempArr) {
            var minIndex = 0;
            var minArr = tempArr[0];//加上最小的是 第一个
            for (var i = 0; i < tempArr.length; i++) {
                if (tempArr[i] < minArr) {
                    minArr = tempArr[i];
                    minIndex = i;
                }
            }

            return minIndex;

        }

        console.log($("#imgFile").val());
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
})(Container);