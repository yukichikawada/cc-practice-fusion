import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = undefined;
  const root = document.getElementById('root');
  const store = configureStore(preloadedState);
  ReactDOM.render(<App store={store} />, root);
});

registerServiceWorker();
