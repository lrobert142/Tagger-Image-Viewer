import React, { Component } from 'react';
import Thumbnail from "./Thumbnail"

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    );
  }
}

export default Main;
