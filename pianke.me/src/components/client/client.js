import React, {
	Component
} from 'react';
import "./client.css"

class client extends Component {
	render() {
		return (
			<div className="container">
				<div className="top-container">
					<div className="top-content">
						<p>世界很美，<br />而你正好有空。</p>
						<p className="top-des">Stay with me，look around the world － 片刻V5.0</p>
						<div className="top-btn ios-btn"><a href="#123"></a>iOS下载</div>
						<div className="top-btn android-btn"><a href="#123"></a>Android下载</div>
						<div className="client-code">
						<div className="client-code-b"></div>
						</div>
					</div>
				</div>
				<div className="introduce-container">
					<div className="client-title title-one">
						<p className="title">01 <span>白 + 黑模式</span></p>
						<p className="des">白天阅读、夜晚聆听，<br />
							不同的时间就是要有不同的享受。</p>
					</div>
					<div className="client-one">
						<img src="http://qnstatic.pianke.me/public/assets/img/client1.png" alt="" width="841px" />
					</div>
					<div className="client-two">
						<div>
							<img src="http://qnstatic.pianke.me/public/assets/img/client3.png" alt="" width="360px" />
								<div className="client-title title-two">
									<p className="title">02 <span>直播</span></p>
									<p className="des">夜阑人静，给你最美的声音和故事</p>
								</div>
						</div>
					</div>
					<div className="client-three">
						<div>
							<div className="client-title title-three">
								<p className="title">03 <span>片刻社区</span></p>
								<p className="des">随心所欲的诉说，等你来和应</p>
							</div>
							<img src="http://qnstatic.pianke.me/public/assets/img/client4.png" alt="" width="360px" />
						</div>
					</div>
					<div className="client-four">
						<div>
							<img src="http://qnstatic.pianke.me/public/assets/img/client5.png" alt="" width="360px" />
								<div className="client-title title-four">
									<p className="title">04</p>
									<p className="title-des">生活馆，造有情之物</p>
									<p className="des">生活不只诗和远方，还有对美好事物的拥有</p>
								</div>
						</div>
					</div>
					<div className="client-bottom">
						<p>文字，电台，音乐，好物，满足你所有关于美好事物的想象。<br />
							五个版本的更迭，片刻已经陪伴无数人度过了他们的孤单的时刻，<br />
							如果你也有想表达的，在这里，永远有人在关注你。</p>
						<div className="top-btn ios-btn"><a href="#" target="_blank"></a>iOS下载</div>
						<div className="top-btn android-btn"><a href="#"></a>Android下载</div>
						<div className="client-code">
							<div className="client-code-b"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}

}


export default client;