import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/reducer'
import thunk from 'redux-thunk';
import Add from './components/Add'
import List from './components/List'
import {fetchSecrets} from './actions/actions'

const store = createStore(reducer,applyMiddleware(thunk));

store.dispatch(fetchSecrets());


const App = () =>(
  

    <Provider store ={store}>
        <Add/>
        <List/>
    </Provider>

  )


render(<App />, document.getElementById('root'));
