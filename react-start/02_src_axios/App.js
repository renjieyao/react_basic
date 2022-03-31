import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

    getStudentsData = () =>{
        axios.get("http://localhost:3000/api1/students").then(
            response =>{
                console.log('succeed',response.data)
            },
            error => {
                console.log(error.message)
            }
        )
    }

    getCarsData = () => {
        axios.get("http://localhost:3000/api2/cars").then(
            response =>{
                console.log('succeed',response.data)
            },
            error => {
                console.log(error.message)
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentsData}>click me to get student</button>
                <button onClick={this.getCarsData}>get cars</button>
            </div>
        );
    }
}

export default App;
