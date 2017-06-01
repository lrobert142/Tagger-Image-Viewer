import React, {Component} from 'react';

import Thumbnail from "./Thumbnail"
import Searchbar from "./Searchbar"

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let thumbnails = [];
    let filteredRecords = this.props.records;

    if (this.props.searchText) {
      filteredRecords = filteredRecords.filter((record) => {
        let title = record.title.toLowerCase();
        let tags = record.tags.toLowerCase();
        let searchText = this.props.searchText.toLowerCase();

        return title.indexOf(searchText) !== -1 || tags.indexOf(searchText) !== -1;
      });
    }

    filteredRecords.forEach((record, index) => {
        thumbnails.push(<Thumbnail key={index} index={index} src={record.image} title={record.title} handleClick={ () => (this.props.handleThumbnailClick(index)) }/>);
    });

    return (
        <div className="Main">
            <Searchbar handleChange={this.props.handleSearch}/>
            {thumbnails}
        </div>
    );
  }
}

export default Main;
