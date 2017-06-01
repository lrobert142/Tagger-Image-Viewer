import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Header">
        <h2>Meteor Image Viewer!</h2>
        <span className="Header__Add" onClick={this.props.handleAddNew}>+</span>
      </div>
    );
  }
}

export default Header;
