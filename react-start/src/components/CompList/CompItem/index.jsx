import React, { Component } from 'react';

class CompItem extends Component {
    render() {
        const {username,content} = this.props;
        return (
            <div className="comment">
                <div className="comment-username">{username}:</div>
                <p>{content}</p>
            </div>
        );
    }
}

export default CompItem;
