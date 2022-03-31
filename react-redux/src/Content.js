/*
 * @Description: 
 * @Date: 2022-03-24 14:32:04
 * @LastEditTime: 2022-03-25 11:21:35
 * @LastEditors: Please set LastEditors
 * @Reference: 
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ThemeSwitch from './ThemeSwitch';
// import {connect} from './react-redux';
import {connect} from 'react-redux';

class Content extends Component {
    // 如果你要给组件设置 context，那么子组件中 contextTypes 也是必写的。
    static propTypes = {
        themeColor: PropTypes.string
    }

    render() {
        const {themeColor} = this.props;
        return (
            <div>
                <p style={{color: themeColor}}>React.js 小书内容</p>
                <ThemeSwitch/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        themeColor:state.themeColor
    }
}

Content = connect(mapStateToProps)(Content);

export default Content;
