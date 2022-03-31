import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';

import Header from './Header';
import Content from './Content';
// import {Provider} from './react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';
// import reportWebVitals from './reportWebVitals';

// 创建Store集中存储state
// function createStore(reducer){
//   let state = null;
//   const listeners = [];
//   // 订阅者模式
//   const subscribe = (listener) => listeners.push(listener);
//   const getState = () => state;
//   const dispatch = (action) => {
//     state = themeReducer(state,action);//覆盖旧对象
//     listeners.forEach(listener => listener());
//   }
//   dispatch({});//初始化state
//   return {getState,dispatch,subscribe};
// }

const themeReducer = (state,action) => {
  if(!state) return {
    themeColor: "red"
  }
  switch(action.type){
    case "CHANGE_COLOR":
      return {...state,themeColor:action.themeColor}
    default:
      return state;
  }
}

const store = createStore(themeReducer);

class Index extends Component{
  render(){
    return(
      <div>
        <Header/>
        <Content/>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
