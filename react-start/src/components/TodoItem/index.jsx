import React, { Component } from 'react';

import './index.css';

class TodoItem extends Component {
    
    render() {
        const {name,status} = this.props;
        return (
            <div>
                <li>
                    <label>
                        <input type="checkbox" defaultChecked = {status}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{ display: 'none' }}>删除</button>
                </li>
            </div>
        );
    }
}

export default TodoItem;
