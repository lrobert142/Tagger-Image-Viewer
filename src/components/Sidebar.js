import React, { Component } from 'react';
import Logo from './Logo';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <Logo />
        <ul className="Vertical-menu">
          <li className="Vertical-menu__item">Home</li>
          <li className="Vertical-menu__item">Images</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
