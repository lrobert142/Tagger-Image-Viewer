import React, { Component } from 'react';
import logo from '../img/logo.svg';

class Thumbnail extends Component {
  handleClick() {
    console.log("CLICKED!");
  }

  render() {
    return (
      <div className="Thumbnail" onClick={this.handleClick}>
        <img className="Thumbnail__image" src={logo} alt="" />
        <p className="Thumbnail__name">Name</p>
      </div>
    );
  }
}

export default Thumbnail;
