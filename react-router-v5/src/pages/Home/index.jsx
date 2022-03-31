import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import MyNavLink from "../../components/MyNavlink";
import News from "./News/index";
import Messages from './Messages/index'

class Home extends Component {
    render() {
        return (
            <div>
                <h5>我是Home的内容</h5>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/news" children="News"></MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/messages" children="Messages"></MyNavLink>
                    </li>
                </ul>
                <div>
                    {/* <Outlet/> */}
                    <Switch>
                        <Route path="/home/news" component={News}></Route>
                        <Route path="/home/messages" component={Messages}></Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Home;
