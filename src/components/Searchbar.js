import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <div className="Searchbar">
        <input className="Searchbar__Search" type="text" placeholder="Search..." />
      </div>
    );
  }
}

export default Searchbar;
