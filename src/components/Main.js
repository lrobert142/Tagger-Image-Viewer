import React, { Component } from 'react';
import Thumbnail from "./Thumbnail"
import ImageModal from "./ImageModal"
import Searchbar from "./Searchbar"

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      images: [
        {
          id: 0,
          src: "http://placehold.it/100x100",
          title: "Logo 01",
          tags: ["Lorem", "Ipsum", "Dolor"]
        },
        {
          id: 1,
          src: "http://placehold.it/150x150",
          title: "Logo 02",
          tags: ["Dolor", "Sit", "Amet"]
        },
        {
          id: 2,
          src: "http://placehold.it/200x200",
          title: "Logo 03",
          tags: ["Tag01", "Tag02", "Tag03"]
        }
      ],
      activeImageIndex: 0,
      modalActive: false
    };
  }

  handleThumbnailClick(index) {
    this.setState(prevState => ({
      activeImageIndex: index,
      modalActive: !prevState.modalActive
    }));
  }

  toggleModal() {
    this.setState(prevState => ({
      modalActive: !prevState.modalActive
    }));
  }

  render() {
    let thumbnails = [];
    let activeImage = this.state.images[this.state.activeImageIndex];
    this.state.images.forEach((image, index) => {
      thumbnails.push(<Thumbnail key={image.id} index={index} src={image.src} title={image.title} handleClick={this.handleThumbnailClick} />);
    });

    return (
      <div className="Main">
        <Searchbar />
        <ImageModal modalActive={this.state.modalActive} title={activeImage.title} tags={activeImage.tags} image={activeImage.src} handleClose={this.toggleModal} />
        {thumbnails}
      </div>
    );
  }
}

export default Main;
