import React, { Component } from 'react';
import Pubsub from 'pubsub-js';

import './index.css'

class List extends Component {
    state={
        usersInfo:[],
        isLoading:false,
        isFirst:true,
        error:''
    }

    componentDidMount(){
        this.token = Pubsub.subscribe("searchDataUpdate",(msg,stateObj)=>{
            this.setState(stateObj);
        })
    }

    componentWillUnmount(){
        Pubsub.unsubscribe(this.token);
    }

    render() {
        const { usersInfo,isFirst,isLoading,error} = this.state;

        return (
            <div>
                <div className="row">
                    {
                        isFirst ? <h2>Welcome to search</h2> :
                        isLoading ? <h3>"Loading...please wait a moment..."</h3> :
                        error ? <h3>{error}</h3> :
                        usersInfo.map(item => {
                            return <div className="card" key={item.id}>
                                <a rel="noreferrer" href={item.html_url} target="_blank">
                                    <img alt="head_photo" src={item.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{item.login}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default List;
