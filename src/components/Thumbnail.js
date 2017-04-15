import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Thumbnail extends Component {
  render() {
    return (
      <div className="Thumbnail">
        <img className="Thumbnail__image" src={logo} alt="" />
        <p className="Thumbnail__name">Name</p>
      </div>
    );
  }
}

export default Thumbnail;
