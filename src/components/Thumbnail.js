import React, { Component } from 'react';

class Thumbnail extends Component {
  handleClick() {
    console.log("CLICKED!");
  }

  render() {
    return (
      <div className="Thumbnail" onClick={this.handleClick}>
        <img className="Thumbnail__image" src={this.props.image} alt="" />
        <p className="Thumbnail__name">{this.props.name}</p>
      </div>
    );
  }
}

export default Thumbnail;
