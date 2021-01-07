import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux
import { gun } from './redux'
import thunk from 'redux-thunk'
import { Provider } from "./min.react-redux";
// import { applyMiddleware, combineReducers } from 'redux'
import { createStore,applyMiddleware } from './min.redux'
import Page from './context.demo';

// 组织多个reducer 分别管理自身相关联的state
// combineReducer, applyMiddleware(thunk)
// const combineReducer = combineReducers({ gun })
const stores = createStore(gun,applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();