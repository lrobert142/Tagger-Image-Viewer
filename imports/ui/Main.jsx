import React, {Component} from 'react';

import Thumbnail from "./Thumbnail"
import Searchbar from "./Searchbar"

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let thumbnails = [];
    this.props.records.forEach((record, index) => {
        thumbnails.push(<Thumbnail key={index} index={index} src={record.image} title={record.title} handleClick={ () => (this.props.handleThumbnailClick(index)) }/>);
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
