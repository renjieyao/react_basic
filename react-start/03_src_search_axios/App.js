import React, { Component } from 'react';

import Search from './components/Search';
import List from './components/List';

class App extends Component {
    state={
        usersInfo:[],
        isLoading:false,
        isFirst:true,
        error:''
    }

    updateState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div>
                <Search updateState={this.updateState}/>
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;
