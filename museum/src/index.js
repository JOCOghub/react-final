import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import combineReducers from './reducers/combine.js'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)))



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
