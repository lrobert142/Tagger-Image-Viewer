import React, { Component } from 'react';

class ImageModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={!(this.props.modalActive) ? 'no-display' : 'Modal'} onClick={this.props.handleClose}>
        <div className="Modal__Close">
          <p>X</p>
        </div>
        <div className="Modal__Content">
          <input id="title" name="title" type="text" placeholder="Title" />
          <input id="tags" name="tags" type="text" placeholder="Tags" />
          <input id="file" name="file" type="file" />
          <input id="submit" type="submit" value="Add" />
        </div>
      </div>
    );
  }
}

export default ImageModal;
