import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import AddNewModal from './AddNewModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'addModalActive': false
    };

    this.addRecord = this.addRecord.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
  }

  addRecord() {
    //TODO Add new record to DB
    console.log("NEW RECORD ADDED");
  }

  toggleAddModal() {
    this.setState(prevState => ({
        addModalActive: !prevState.addModalActive
    }));
  }

  render() {
    return (
      <div className="App">
        <Header handleAddNew={this.toggleAddModal} />
        <AddNewModal handleSubmit={this.addRecord} handleClose={this.toggleAddModal} modalActive={this.state.addModalActive} />
        <Main baseUrl="http://localhost:3000" />
      </div>
    );
  }
}

export default App;
