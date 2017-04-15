import React, { Component } from 'react';
import Thumbnail from "./Thumbnail"
import ImageModal from "./ImageModal"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      activeImage: {}
    };
  }

  render() {
    return (
      <div className="Main">
        <Thumbnail image="http://placehold.it/100x100" name="Logo 1" />
        <Thumbnail image="http://placehold.it/100x100" name="Logo 2" />
        <Thumbnail image="http://placehold.it/100x100" name="Logo 3" />
        <Thumbnail image="http://placehold.it/100x100" name="Logo 4" />
      </div>
    );
  }
}

export default Main;
