import React, { Component } from 'react';

class ImageModal extends Component {

  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    console.log("HANDLE EDIT");
  }

  render() {
    let tags = [];
    let splitTags = this.props.record.tags.split(',');
    splitTags.forEach((tag, index) => {
      tags.push(<p key={index} className="ImageModal__Left-Tag">{tag.trim()}</p>);
    });

    return (
      <div className={!(this.props.modalActive) ? 'no-display' : 'Modal'}>
        <div className="Modal__Options">
          <p className="Modal__Options-Edit" onClick={this.handleEdit}>EDIT</p>
          <p className="Modal__Options-Close" onClick={this.props.handleClose}>X</p>
        </div>
        <div className="Modal__Content">
          <div className="ImageModal__Left">
            <h1 className="ImageModal__Left-Heading">{this.props.record.title}</h1>
            <h2 className="ImageModal__Left-Subheading">Tags</h2>
            { tags }
          </div>
          <div className="ImageModal__Right">
            <img className="ImageModal__Image" src={this.props.record.image} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageModal;
