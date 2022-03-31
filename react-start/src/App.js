import React, { Component } from 'react';
import {nanoid} from 'nanoid';

import CompInput from './components/CompInput';
import CompList from './components/CompList';

import './App.css'

class App extends Component {
    constructor(){
        super();
        this.state={
            commentList:[]
        }
    }

    UNSAFE_componentWillMount(){
        this._loadComments()
    }

    _loadComments(){
        let commentList = localStorage.getItem('commentList');
        if(commentList){
            commentList = JSON.parse(commentList);
            this.setState({commentList})
        }
    }

    _saveComments(comments){
        localStorage.setItem('commentList',JSON.stringify(comments))
    }

    handleSubmit = (comment) => {
        if(!comment) return;
        if(!comment.username) return alert("please input username");
        if(!comment.content) return alert("please input content");

        const {commentList} = this.state;
        comment = {...comment,id:nanoid()}
        commentList.push(comment);

        this.setState({commentList});
        this._saveComments(commentList);
    }

    render() {
        return (
            <div className='wrapper'>
                <CompInput onSubmit={this.handleSubmit}/>
                <CompList commentList={this.state.commentList}/>
            </div>
        );
    }
}

export default App;
