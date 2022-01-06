import React, { Component } from 'react';

import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

import './App.css';

class App extends Component {
    state = {
        todos: [
            {id: 0, name: "eat", status: true},
            {id: 1, name: "sleep", status: true},
            {id: 2, name: "coding", status: false},
        ],
    }

    render() {
        const {todos} = this.state;

        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <TodoHeader />
                        <TodoList todos={todos}/>
                        <TodoFooter />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;