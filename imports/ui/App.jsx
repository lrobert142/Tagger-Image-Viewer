import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import { Records } from '../api/records-collection.js';

import Header from './Header';
import Main from './Main';
import AddRecordModal from './modal/AddRecordModal';
import ImageModal from './modal/ImageModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'activeModal': '',
      'activeImageIndex': 0,
      'searchText': ''
    };

    this.addRecord = this.addRecord.bind(this);
    this.updateRecord = this.updateRecord.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.showImageModal = this.showImageModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showImage = this.showImage.bind(this);
    this.filterBySearch = this.filterBySearch.bind(this);
  }

  addRecord(title, tags, image) {
    Images.insert(image, (err, fileObj) => {
      if (err) {
        console.log("An error occurred!");
        console.log(err);
      } else {
        let imageUrl = "/cfs/files/images/" + fileObj._id;
        Meteor.call('records.insert', title, tags, imageUrl);
      }
    });
  }

  updateRecord(event) {
    console.log("EVENT:", event);
    console.log("TARGET:", event.target);
    console.log("VALUE:", event.target.value);
  }

  showAddModal() {
    this.setState(prevState => ({
        'activeModal': 'AddRecordModal'
    }));
  }

  showImageModal() {
    this.setState(prevState => ({
      'activeModal': 'ImageModal'
    }));
  }

  closeModal() {
    this.setState(prevState => ({
      'activeModal': ''
    }));
  }

  showImage(index) {
    this.setState(prevState => ({
        'activeImageIndex': index
    }));
    this.showImageModal();
  }

  filterBySearch(search) {
    this.setState(prevState => ({
        'searchText': search
    }));
  }

  render() {
    return (
      <div className="App">
        <Header handleAddNew={this.showAddModal} />
        <Main handleThumbnailClick={this.showImage} handleSearch={this.filterBySearch} records={this.props.records} searchText={this.state.searchText} />
        <AddRecordModal handleSubmit={this.addRecord} handleClose={this.closeModal} modalActive={this.state.activeModal === 'AddRecordModal'} />
        <ImageModal handleClose={this.closeModal} handleChange={this.updateRecord} modalActive={this.state.activeModal === 'ImageModal'}
          record={ (this.props.records.length > 0 ? this.props.records[this.state.activeImageIndex] : {'title': "", 'tags': "", 'image': ""}) }
        />
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('records', 'title');

    return {
        records: Records.find({}, {sort: {createdAt: -1}}).fetch()
    };
}, App);
