import React, { Component } from 'react';
import logo from '../img/logo.svg';

class ImageModal extends Component {
  render() {
    return (
      <div className="ImageModal">
        <div className="ImageModal__Close">
          <p>X</p>
        </div>
        <div className="ImageModal__Content">
          <div className="ImageModal__Left">
            <h1>Title</h1>
            <p>Lorem Ipsum</p>
            <h2>Tags</h2>
            <p>Dolor, Sit, Amet</p>
          </div>
          <div className="ImageModal__Right">
            <img className="ImageModal__Image" src={logo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageModal;
