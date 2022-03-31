import React, { Component } from 'react';
// import axios from 'axios';
import Pubsub from 'pubsub-js';

import './index.css'

class Search extends Component {
    queryUserInfo = async() => {
        const {keywordElement:{value:searchWord}} = this;

        Pubsub.publish("searchDataUpdate",{isFirst:false,isLoading:true});

        // axios.get(`http://localhost:3000/api1/search/users?q=${searchWord}`).then(
        //     response => {
        //         Pubsub.publish("searchDataUpdate",{isLoading:false,usersInfo:response.data.items});
        //     },
        //     error =>{
        //         Pubsub.publish("searchDataUpdate",{isLoading:false,error:error.message});
        //     }
        // )

        // use fetch to get data
        fetch(`http://localhost:3000/api1/search/users?q=${searchWord}`,{
            method:'get',
        }).then(
            // whether request success
            res=>res.json()
        ).then(res=>{
            // whether data is right
            Pubsub.publish("searchDataUpdate",{isLoading:false,usersInfo:res.items});
        }).catch(err=>{
            Pubsub.publish("searchDataUpdate",{isLoading:false,error:err.message});
        })

        // improve code
        // under code shoule be in async funtion(){}
        try {
            let res = await fetch(`http://localhost:3000/api1/search/users?q=${searchWord}`,{
                method:'get',
            })
            let result = await res.json()
            Pubsub.publish("searchDataUpdate",{isLoading:false,usersInfo:result.items});
        } catch (error) {
            Pubsub.publish("searchDataUpdate",{isLoading:false,error:error.message});
        }
    }

    render() {
        return (
            <div>
                <section className="jumbotron beauty">
                    <h3 className="jumbotron-heading">Search Github Users</h3>
                    <div>
                        <input ref={(c) => {this.keywordElement = c}} type="text" placeholder="enter the name you search"/>&nbsp;
                        <button onClick={this.queryUserInfo}>Search</button>
                    </div>
                </section>
            </div>
        );
    }
}

export default Search;
