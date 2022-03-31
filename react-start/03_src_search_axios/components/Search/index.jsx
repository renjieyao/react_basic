import React, { Component } from 'react';
import axios from 'axios';

import './index.css'

class Search extends Component {
    queryUserInfo = () => {
        const {keywordElement:{value:searchWord}} = this;

        const {updateState} = this.props;

        updateState({isFirst:false,isLoading:true});

        axios.get(`http://localhost:3000/api1/search/users?q=${searchWord}`).then(
            response => {
                updateState({isLoading:false,usersInfo:response.data.items})
            },
            error =>{
                updateState({isLoading:false,error:error.message})
            }
        )
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
