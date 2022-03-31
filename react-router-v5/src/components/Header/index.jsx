import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {

    routerBack=() => {
        this.props.history.goBack()
    }
    
    routerForward = () => {
        this.props.history.goForward()
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                            <div>
                                <button onClick={this.routerBack}>back</button>
                                <button onClick={this.routerForward}>forward</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);
