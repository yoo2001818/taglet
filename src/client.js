// Client init point
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/index.js';
import App from './views/App.js';

document.title = 'Taglet';

const store = configureStore();

render(
  <div id='root'>
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.body
);
