import React, { Component } from 'react';

import Header from './Header'
import Main from './Main'

// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main baseUrl="http://localhost:3000" />
      </div>
    );
  }
}

export default App;
