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

    // add todo to list
    addTodo = (todoObj) => {
        const {todos} = this.state;
        
        this.setState({todos:[todoObj,...todos]});

    }

    // delete todo from list
    deleteTodo = (id) => {
        const {todos} = this.state;
        let newTodos = todos.filter(item => {
            return item.id !== id
        })
        this.setState({todos:newTodos})
    }

    // update todo checked status
    updateStatus = (id,status) => {
        const {todos} = this.state;

        let newTodos = todos.map(todo => {
            if(todo.id === id){
                return {...todo,status}
            }else{
                return todo
            }
        })

        this.setState({todos:newTodos})
    }

    // clear done todo
    clearDoneTodo = ()=>{
        const {todos} = this.state;
        let newTodos = todos.filter(item => {
            return !item.status
        })
        this.setState({todos:newTodos})
    }

    // change checkAll
    handleCheckAll = (status)=>{
        const {todos} = this.state;

        let newTodos = todos.map(item => {
            return {...item,status}
        })

        this.setState({todos:newTodos})
    }

    render() {
        const {todos} = this.state;

        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <TodoHeader addTodo={this.addTodo}/>
                        <TodoList todos={todos} updateStatus={this.updateStatus} deleteTodo={this.deleteTodo}/>
                        <TodoFooter todos={todos} handleCheckAll={this.handleCheckAll} clearDoneTodo={this.clearDoneTodo}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;