import React, { Component } from 'react';
// import querystring from 'querystring';



class Detail extends Component {
    titleArr = [
        {id:"01",content:"hello message1"},
        {id:"02",content:"hello message2"},
        {id:"03",content:"hello message3"},
    ]

    render() {
        debugger
        let condition = this.props.location.state;
        let {id,title} = condition ? condition : this.props.match.params;
        // params 传参
        // const {id,title} = this.props.match.params;

        // search 传参
        // const {id,title} = querystring.parse(this.props.location.search.slice(1));

        // state 传参
        // const {id,title} = this.props.location.state;

        let findRes = this.titleArr.find(item =>{
            return item.id === id
        })

        return (
            <div>
                <div>id:{id}</div>
                <div>title:{title}</div>
                <div>content:{findRes.content}</div>
            </div>
        );
    }
}

export default Detail;
