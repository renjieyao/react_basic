import React, { Component } from 'react';

import CompItem from './CompItem';

class CompList extends Component {
    static defaultProps = {
        commentList:[]
    }
    // constructor(){
    //     super();
    //     this.state = {
    //         commentList:[
    //             {username:"tom",id:1,content:"Hello world"},
    //             {username:"jerry",id:2,content:"Hello yao"},
    //             {username:"macow",id:3,content:"Hello react"},
    //         ]
    //     }
    // }

    render() {
        const {commentList} = this.props;

        return (
            <div>
                {commentList.map(item => {
                    return <CompItem key={item.id} {...item}/>
                })}
            </div>
        );
    }
}

export default CompList;
