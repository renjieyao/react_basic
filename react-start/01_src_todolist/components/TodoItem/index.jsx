import React, { Component } from 'react';

import './index.css';

class TodoItem extends Component {

    state = {mouseFlag:false};

    handleMouseMove = (flag) => {
        return () => {
            this.setState({mouseFlag:flag})
        }
    }

    statusChange = id => {
        const {updateStatus} = this.props;
        return (e) => {
            updateStatus(id,e.target.checked)
        }
    }

    handleDelete = (id) => {
        const {deleteTodo} = this.props;
        deleteTodo(id);
    }
    
    render() {
        const {id,name,status} = this.props;
        const {mouseFlag} = this.state;
        return (
            <div>
                <li style={{backgroundColor:mouseFlag ? '#ddd' : 'white'}} onMouseEnter={this.handleMouseMove(true)} onMouseLeave={this.handleMouseMove(false)}>
                    <label>
                        <input onChange = {this.statusChange(id)} type="checkbox" checked = {status}/>
                        <span>{name}</span>
                    </label>
                    <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{ display:mouseFlag ? 'block' : 'none' }}>删除</button>
                </li>
            </div>
        );
    }
}

export default TodoItem;
