import React, { Component } from 'react';

import TodoItem from '../TodoItem';

import './index.css';

class TodoList extends Component {
    
    render() {
        const {todos} = this.props;

        return (
            <div>
                <ul className="todo-main">
                    {
                        todos.map(todo=>{
                            return <TodoItem key= {todo.id} {...todo}/>
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}

export default TodoList;
