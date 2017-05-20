import React, { Component } from 'react';

class ImageModal extends Component {
  render() {
    return (
      <div className={!(this.props.modalActive) ? 'no-display' : 'Modal'} onClick={this.props.handleClose}>
        <div className="Modal__Close">
          <p>X</p>
        </div>
        <div className="Modal__Content">
          <div className="ImageModal__Left">
            <h1>{this.props.title}</h1>
            <h2>Tags</h2>
            <p>{this.props.tags.toString()}</p>
          </div>
          <div className="ImageModal__Right">
            <img className="ImageModal__Image" src={this.props.image} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageModal;
