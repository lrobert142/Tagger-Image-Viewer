import React, { Component } from 'react';
import {Images} from '../api/common.js';

class ImageModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={!(this.props.modalActive) ? 'no-display' : 'Modal'}>
        <div className="Modal__Close" onClick={this.props.handleClose}>
          <p>X</p>
        </div>
        <div className="Modal__Content">
          <input id="title" name="title" type="text" placeholder="Title" />
          <input id="tags" name="tags" type="text" placeholder="Tags" />
          <input id="file" name="file" type="file" onChange={this.props.handleSubmit} />
          <input id="submit" type="submit" value="Add" onClick={this.props.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default ImageModal;
