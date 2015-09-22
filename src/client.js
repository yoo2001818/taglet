// Client init point
import 'babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/index.js';
import App from './views/App.js';

const store = configureStore();

React.render(
  <div id='root'>
    <Provider store={store}>
      {() => <App />}
    </Provider>
  </div>,
  document.body
);
