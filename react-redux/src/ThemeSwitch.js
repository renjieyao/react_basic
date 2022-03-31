/*
 * @Description: 
 * @Date: 2022-03-24 14:33:11
 * @LastEditTime: 2022-03-25 11:21:46
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";

class ThemeSwitch extends Component {
    // 如果你要给组件设置 context，那么子组件中 contextTypes 也是必写的。
    static propTypes = {
        store: PropTypes.object,
        onSwitchColor: PropTypes.func
    }

    handleSwitchColor(color){
        if(this.props.onSwitchColor){
            this.props.onSwitchColor(color)
        }
    }

    render() {
        const {themeColor} = this.props;
        return (
            <div>
                <button style={{color:themeColor}}onClick={this.handleSwitchColor.bind(this,"red")}>red</button>
                <button style={{color:themeColor}} onClick={this.handleSwitchColor.bind(this,"blue")}>blue</button>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({type:"CHANGE_COLOR",themeColor: color})
        }
    }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

export default ThemeSwitch;
