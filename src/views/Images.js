import './style/Images.scss';

import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='images'>
        <div className='sidebar'>
          Sidebar
        </div>
        <div className='content'>
          Content
        </div>
      </div>
    );
  }
}
