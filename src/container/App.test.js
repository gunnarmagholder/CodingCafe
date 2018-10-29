import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe("App", () => {
  let mountedApp;
  beforeEach(() => {
    mountedApp = shallow(<App />);
  });
  it('renders without crashing', () => {
    expect(mountedApp).toBeDefined(); 
  });
  
  it('renders a Map inside the app', () => {
    const Maps = mountedApp.find('Map');
    expect(Maps.length).toBe(1);
  });  
});


