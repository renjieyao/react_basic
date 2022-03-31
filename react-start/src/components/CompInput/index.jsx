import React, { Component } from 'react';

class CompInput extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            content:'',
        }
    }

    UNSAFE_componentWillMount(){
        this._loadUsername();
    }

    componentDidMount(){
        this.textarea.focus()
    }

    handleContentChange = (e) => {
        this.setState({content:e.target.value})
    }

    usernameChange = (e) => {
        this.setState({username:e.target.value})
    }

    handleUsernameBlur = (e) => {
        this._saveUsername(e.target.value)
    }

    _loadUsername = () => {
        const username = localStorage.getItem('username');
        if(username){
            this.setState({username})
        }
    }

    _saveUsername = (username) => {
        localStorage.setItem('username',username);
    }

    handleSubmit = () => {
        
        const {onSubmit} = this.props;
        if(onSubmit){
            const {username,content} = this.state;
            onSubmit({username,content})
        }
        this.setState({username:'',content:''})
    }

    render() {
        const {username,content} = this.state;
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onBlur={this.handleUsernameBlur.bind(this)} value={username} onChange={this.usernameChange}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} value={content} onChange={this.handleContentChange}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        发布
                    </button>
                </div>
            </div>
        );
    }
}

export default CompInput;
