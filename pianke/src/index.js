import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {HashRouter, Route, Link} from "react-router-dom";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import "./reset.css"
//组件导入部分

// import Header from './components/header/header';
import Container from './components/timeline/contain/container'


import Index2 from './components/index2/index2';
import Indexread from './components/indexread/indexread';
import Indexradio from './components/indexradio/indexradio';
import Indexuser from './components/indexuser/indexuser';

import Header from './components/header/header';
// 客户端
import Client from './components/client/client';
// 底部
import Footer from './components/footer/footer';



//radio
import Radio from './components/radio/radioall';

//love
import Loveall from './components/radio/loveall';

//travel
import Travelall from './components/radio/travelall.js';

//story
import Storyall from './components/radio/storyall.js';

//music
import Musicall from './components/radio/musicall.js';

//movie
import Movieall from './components/radio/movieall.js';

//read
import Readall from './components/radio/readall.js';

import Love from './components/radio/love/love-logo/love.js';

// 登录
import Login from './components/login/login';
// 修改密码
import Change from './components/change/change';
// 设置用户信息
import Setuser from './components/setuser/setuser';
// 用户信息
import Introduce from './components/introduce/introduce';




let store = createStore((state = {
    hoverword : "",
    radioname:"",
    hotname:""
}, action) =>{
    switch(action.type){
        case 'ABC':
            return Object.assign({}, state, {
                hoverword:action.hoverword,
                radioname:action.radioname,
                hotname:action.hotname
            });
        case 'DECREMENT':
            return state
        default:
            return state
    }
})

				
ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <div>
				<Header />
                <Login />
				 <Route exact path="/" component={Index2} />
                <Route exact path="/client" component={Client} />
                <Route exact path="/change" component={Change} />
                <Route exact path="/setuser" component={Setuser} />
                <Route exact path="/introduce" component={Introduce} />
              <Route path="/container" component={Container} />
                <Route path="/indexread" component={Indexread}/>
                <Route path="/indexradio" component={Indexradio} />
               <Route path="/Radio" component={Radio} />
                <Route path="/Loveall" component={Loveall} />
                <Route path="/Travelall" component={Travelall} />
                <Route path="/Storyall" component={Storyall} />
                <Route path="/Musicall" component={Musicall} />
                <Route path="/Movieall" component={Movieall} />
                <Route path="/Readall" component={Readall} />
                <Route path="/indexuser" component={Indexuser} />
                <Footer />
            </div>
        </Provider>

    </HashRouter>, document.getElementById('root'));
registerServiceWorker();






