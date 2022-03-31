/*
 * @Description: 
 * @Date: 2022-03-24 20:48:18
 * @LastEditTime: 2022-03-25 11:19:32
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";

export const connect = (mapStateToProps,mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component{
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(){
            super();
            this.state = {
                allProps:{}
            }
        }

        componentDidMount(){
            const { store } =this.context;
            this._updateProps();
            store.subscribe(() => this._updateProps());
        }

        _updateProps(){
            const {store} = this.context;
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(),this.props) : {};

            let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch,this.props) : {};
            // 整合普通的props和从state生成的props
            this.setState({allProps:{
                ...stateProps,
                ...dispatchProps,
                ...this.props
            }})
        }

        render(){
            const {allProps} = this.state;
            return <WrappedComponent {...allProps}/>
        }
    }
    return Connect
}

// Provider 作为所有组件树的根节点，外界可以通过 props 给它提供 store，它会把 store 放到自己的 context 里面，好让子组件 connect 的时候都能够获取到。
export class Provider extends Component{
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store: PropTypes.object,
    }

    getChildContext(){
        return {
            store: this.props.store
        }
    }

    render(){
        return (
            <div>{this.props.children}</div>
        )
    }
}
