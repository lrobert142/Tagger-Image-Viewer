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

  addRecord(event) {
    console.log("EVENT:", event);
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if(err) {
          console.log("An error occurred!");
          console.log(err);
        } else {
          console.log("NEW RECORD ADDED:", fileObj);
        }
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });

    //TODO Show confirmation message + clear form
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
