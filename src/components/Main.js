import React, {Component} from 'react';
import axios from 'axios';
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
    axios.get(this.props.baseUrl + '/all')
      .then((res) => {
        this.setState(prevState => ({
          images: res.data.images
        }));
      })
      .catch((err) => {
        console.log("ERR:", err);
      });
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
    let url = search !== '' ? this.props.baseUrl + '/search/' + search : this.props.baseUrl + '/all'
    axios.get(url)
      .then((res) => {
        this.setState(prevState => ({
          searchText: search,
          images: res.data.images,
          activeImageIndex: 0
        }));
      })
      .catch((err) => {
        console.log("ERR:", err);
      });
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
