import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';
import AddRecordModal from './modal/AddRecordModal';
import ImageModal from './modal/ImageModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: '',
      images: [
        {
          id: 0,
          title: '',
          tags: '',
          url: ''
        }
      ],
      activeImageIndex: 0,
      searchText: ''
    };

    this.addRecord = this.addRecord.bind(this);
    this.showAddModal = this.showAddModal.bind(this);
    this.showImageModal = this.showImageModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.showImage = this.showImage.bind(this);
  }

  componentDidMount() {
    //TODO
    // this.setState(prevState => ({
    //     images: Images.find()
    // }));
    console.log("IMAGES:", Images);
  }

  addRecord(event) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if(err) {
          console.log("An error occurred!");
          console.log(err);
        } else {
          //TODO Add more details, insert into DB, clear form (& close modal???)
          console.log("NEW RECORD ADDED:", fileObj);
        }
      });
    });
  }

  showAddModal() {
    this.setState(prevState => ({
        activeModal: 'AddRecordModal'
    }));
  }

  showImageModal() {
    this.setState(prevState => ({
      activeModal: 'ImageModal'
    }));
  }

  closeModal() {
    this.setState(prevState => ({
      activeModal: ''
    }));
  }

  showImage(index) {
    this.setState(prevState => ({
        activeImageIndex: index
    }));
    this.showImageModal();
  }

  filterBySearch(search) {
    //TODO Filter by search, set state
    console.log("FILTER BY SEARCH");
  }

  render() {
    return (
      <div className="App">
        <Header handleAddNew={this.showAddModal} />
        <Main handleThumbnailClick={this.showImage} handleSearch={this.filterBySearch} images={this.state.images} />
        <AddRecordModal handleSubmit={this.addRecord} handleClose={this.closeModal} modalActive={this.state.activeModal === 'AddRecordModal'} />
        <ImageModal handleClose={this.closeModal} modalActive={this.state.activeModal === 'ImageModal'} record={this.state.images[this.state.activeImageIndex]} />
      </div>
    );
  }
}

export default App;
