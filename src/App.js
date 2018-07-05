import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import './App.css';
import Root from './components/root';

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Root store={store} />
    </HashRouter>
  </Provider>
)

export default App;
