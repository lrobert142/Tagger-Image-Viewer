import React, { Component } from 'react';
import { Images } from '../../api/common.js';

class AddRecordModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={!(this.props.modalActive) ? 'no-display' : 'Modal'}>
        <div className="Modal__Close" onClick={this.props.handleClose}>
          <p>X</p>
        </div>
        <div className="Modal__Content">
          <form className="AddRecordForm" onSubmit={this.props.handleSubmit}>
            <input id="title" name="title" type="text" placeholder="Title" />
            <input id="tags" name="tags" type="text" placeholder="Tags" />
            <input id="file" name="file" type="file" />
            <input id="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddRecordModal;
