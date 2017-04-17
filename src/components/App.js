import React, { Component } from 'react';
import Header from './Header'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main baseUrl="http://localhost:2000" />
      </div>
    );
  }
}

export default App;
