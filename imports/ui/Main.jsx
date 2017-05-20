import React, {Component} from 'react';

import Thumbnail from "./Thumbnail"
import Searchbar from "./Searchbar"

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let thumbnails = [];
    this.props.images.forEach((image, index) => {
        thumbnails.push(<Thumbnail key={image.id} index={index} src={image.url} title={image.title} handleClick={ () => (this.props.handleThumbnailClick(index)) }/>);
    });

    return (
        <div className="Main">
            <Searchbar handleChange={this.handleSearch}/>
            {thumbnails}
        </div>
    );
  }
}

export default Main;
