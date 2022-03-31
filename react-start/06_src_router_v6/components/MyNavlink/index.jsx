import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import './index.css'

class MyNavlink extends Component {
    render() {
        return (
            <div>
                <NavLink className="list-group-item" activeclassname="hello-active" {...this.props}/>
            </div>
        );
    }
}

export default MyNavlink;
