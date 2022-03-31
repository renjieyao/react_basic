/*
 * @Description: 
 * @Date: 2022-03-24 14:31:12
 * @LastEditTime: 2022-03-25 11:21:55
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";

import {connect} from "react-redux";


class Header extends Component {
    // 如果你要给组件设置 context，那么子组件中 propTypes 也是必写的。
    static propTypes = {
        themeColor: PropTypes.string
    }

    render() {
        const {themeColor} = this.props;
        return (
            <div>
                <h1 style = {{color: themeColor}}>react xiaoshu</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}
Header = connect(mapStateToProps)(Header);

export default Header;
