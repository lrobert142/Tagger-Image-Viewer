import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <div className="Searchbar">
        <input className="Searchbar__Search" ref="search" type="text" placeholder="Search..." onChange={() => {this.props.handleChange(this.refs.search.value)}} />
      </div>
    );
  }
}

export default Searchbar;
