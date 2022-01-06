import React, { Component } from 'react';
import './index.css';

class TodoHeader extends Component {

    handleKeyUp = (e) => {
        const {keyCode,target} = e.event;
        if(keyCode !== 13){
            return;
        }
        console.log(target.value)
    }

    render() {
        return (
            <div>
                <div className="todo-header">
                    <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
                </div>
            </div>
        );
    }
}

export default TodoHeader;
