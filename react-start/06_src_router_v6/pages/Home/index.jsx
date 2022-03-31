import React, { Component } from 'react';
import {Routes, Route, Outlet} from 'react-router-dom';

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
                    <Routes>
                        <Route path="/home/news" element={<News/>}></Route>
                        <Route path="/home/messages" element={<Messages/>}></Route>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default Home;
