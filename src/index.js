import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import { Provider } from 'react-redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

import {createStore, applyMiddleware, compose} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // for dev tools
// const store = createStore(reducers, composeEnhancers(applyMiddleware)) 

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk))) 

ReactDOM.render(
  <Provider store={store}><App/></Provider>, 
  document.querySelector('#root')
);