import React, { Component } from 'react';

class Thumbnail extends Component {
  render() {
    return (
      <div className="Thumbnail" onClick={() => this.props.handleClick(this.props.index)}>
        <img className="Thumbnail__Image" src={this.props.src} alt="" />
        <p className="Thumbnail__Title">{this.props.title}</p>
      </div>
    );
  }
}

export default Thumbnail;
