import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Logo extends Component {
  render() {
    return (
      <div className="Logo">
        <img className="Logo__Image" src={logo} width="80" height="80" alt="Logo" />
        <p className="Logo__text">Tagged Image Viewer</p>
      </div>
    );
  }
}

export default Logo;
