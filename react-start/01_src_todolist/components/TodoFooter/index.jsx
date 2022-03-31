import React, { Component } from 'react';

import './index.css';

class TodoFooter extends Component {
    checkAll = (e) => {
        let status = e.target.checked;
        const {handleCheckAll} = this.props;

        handleCheckAll(status);
    }

    clearCheckTodo = () => {
        const {clearDoneTodo} = this.props;
        clearDoneTodo();
    }

    render() {
        const {todos} = this.props;
        let doneCount = todos.reduce((pre,cur) => pre + Boolean(cur.status),0)
        let total = todos.length;

        return (
            <div>
                <div className="todo-footer">
                    <label>
                        <input type="checkbox" checked={doneCount === total && total!==0} onChange={this.checkAll}/>
                    </label>
                    <span>
                        <span>已完成{doneCount}</span> / 全部{total}
                    </span>
                    <button className="btn btn-danger" onClick={this.clearCheckTodo}>清除已完成任务</button>
                </div>
            </div>
        );
    }
}

export default TodoFooter;
