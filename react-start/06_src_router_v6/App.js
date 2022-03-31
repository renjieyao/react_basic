import React, { Component } from 'react';
import { Route,Routes,Navigate} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import MyNavlink from './components/MyNavlink';


function DefaultRoute(){
    return <Navigate to="/home/news" replace />;
}
class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <Header/>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                <MyNavlink to="/about" children="About"/>
                                <MyNavlink to="/home" children="Home"/>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <Routes>
                                    <Route path="/" element={<DefaultRoute/>}></Route>
>                                   <Route path="/home/*" element={<Home/>}></Route>
                                    <Route path="/about/*" element={<About/>}></Route>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
