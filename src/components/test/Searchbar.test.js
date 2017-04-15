import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from '../Searchbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Searchbar />, div);
});
