import React, { Component } from 'react';
import Thumbnail from "./Thumbnail"
import ImageModal from "./ImageModal"

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <ImageModal />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    );
  }
}

export default Main;
