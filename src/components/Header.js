import './style/Header.scss';

import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='header'>
        <div className='button'>Images</div>
        <div className='button'>Tags</div>
        <div className='button'>Settings</div>
      </div>
    );
  }
}
