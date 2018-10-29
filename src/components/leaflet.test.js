import React from 'react';
import { shallow } from 'enzyme';
import Map from './leaflet';

it('renders without crashing', () => {
  let mountedLeaflet = shallow(<Map />);
});
