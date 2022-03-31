import React, { Component } from 'react';
import {nanoid} from 'nanoid';

import './index.css';

class TodoHeader extends Component {

    handleKeyUp = (e) => {
        const {keyCode,target} = e;
        if(keyCode !== 13){
            return;
        }
        if(target.value.trim() === "") {
            alert("the input value cannot be empty");
            return ;
        };
        const todoObj = {id:nanoid(),name:target.value,status:false};
        this.props.addTodo(todoObj);
        target.value = "";
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
