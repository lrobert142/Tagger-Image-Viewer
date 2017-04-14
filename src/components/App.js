import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>
      </div>
    );
  }
}

export default App;
