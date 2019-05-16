import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Dashboard from './components/Dashboard';
import './style.css';


import reducers from './reducers'


const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
