import React, { Component } from 'react';

class ImageModal extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'isEditing': false
    }

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    this.setState(prevState => ({
        'isEditing': !prevState.isEditing
    }));
  }

  render() {
    let tags = [];
    let splitTags = this.props.record.tags.split(',');
    splitTags.forEach((tag, index) => {
      tags.push(<p key={index} className={this.state.isEditing ? 'no-display' : 'ImageModal__Left-Tag'}>{tag.trim()}</p>);
    });

    return (
      <div className={!(this.props.modalActive) ? 'no-display' : 'Modal'}>

        <div className="Modal__Options">
          <p className="Modal__Options-Edit" onClick={this.handleEdit}>{this.state.isEditing ? 'FINISH': 'EDIT'}</p>
          <p className="Modal__Options-Close" onClick={this.props.handleClose}>X</p>
        </div>

        <div className="Modal__Content">
          <div className="ImageModal__Left">
            <h1 className={this.state.isEditing ? 'no-display': 'ImageModal__Left-Heading'}>{this.props.record.title}</h1>
            <input id="editTitle" type="text" className={this.state.isEditing ? '' : 'no-display'} value={this.props.record.title} onChange={this.props.handleTitleChange} />
            <h2 className="ImageModal__Left-Subheading">Tags</h2>
            { tags }
            <input id="editTags" type="text" className={this.state.isEditing ? '' : 'no-display'} value={this.props.record.tags} onChange={this.props.handleTagsChange} />
          </div>

          <div className="ImageModal__Right">
            <img className="ImageModal__Image" src={this.props.record.image} alt="Featured Image" />
          </div>
        </div>

      </div>
    );
  }
}

export default ImageModal;
