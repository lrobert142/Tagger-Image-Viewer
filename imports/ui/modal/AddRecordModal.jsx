import React, { Component } from 'react';
import { Images } from '../../api/images-collection.js';

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
          <form id="addRecordForm" className="AddRecordForm"
            onSubmit={(event) => {
              event.preventDefault();

              let title = document.getElementById('title').value;
              let tags = document.getElementById('tags').value;
              let image = document.forms['addRecordForm']['image'].files[0];
              this.props.handleSubmit(title, tags, image);
            } }
          >
            <h1 className="Modal__Title">Add New Image</h1>
            <input id="title" name="title" type="text" placeholder="Title" />
            <input id="tags" name="tags" type="text" placeholder="Tags" />
            <input id="image" name="image" type="file" />
            <input id="submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default AddRecordModal;
