import React from 'react';
import ReactDOM from 'react-dom';
import ImageModal from '../ImageModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageModal />, div);
});
