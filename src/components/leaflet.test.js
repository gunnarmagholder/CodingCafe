import React from 'react';
import ReactDOM from 'react-dom';
import Map from './bingmap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Map />, div);
  ReactDOM.unmountComponentAtNode(div);
});
