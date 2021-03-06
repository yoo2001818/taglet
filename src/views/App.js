import './style/App.scss';

import React, { Component } from 'react';
import Header from '../components/Header.js';
import Images from './Images.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='app'>
        <Header />
        <div id='content'>
          <Images />
        </div>
      </div>
    );
  }
}
