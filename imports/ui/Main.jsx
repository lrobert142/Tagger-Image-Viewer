import React, {Component} from 'react';
import Thumbnail from "./Thumbnail"
import ImageModal from "./ImageModal"
import Searchbar from "./Searchbar"

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        images: [
          {
            id: 0,
            title: "",
            tags: "",
            url: ""
          }
        ],
        activeImageIndex: 0,
        modalActive: false,
        searchText: ""
    };

    this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    //TODO Get all images
    console.log("componentDidMount");
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

  handleSearchChange(search) {
    //TODO Search
    console.log(search);
  }

  render() {
    let thumbnails = [];
    let activeImage = this.state.images[this.state.activeImageIndex];
    this.state.images.forEach((image, index) => {
        thumbnails.push(<Thumbnail key={image.id} index={index} src={this.props.baseUrl + '/' + image.url} title={image.title} handleClick={this.handleThumbnailClick}/>);
    });

    return (
        <div className="Main">
            <Searchbar handleChange={this.handleSearchChange}/>
            <ImageModal modalActive={this.state.modalActive} title={activeImage.title} tags={activeImage.tags} image={this.props.baseUrl + '/' + activeImage.url} handleClose={this.toggleModal}/>
            {thumbnails}
        </div>
    );
  }
}

export default Main;
