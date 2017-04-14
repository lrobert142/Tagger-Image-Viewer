import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Header from './Header'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
