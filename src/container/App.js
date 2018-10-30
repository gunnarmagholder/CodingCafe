import React, { Component } from 'react';

import './App.css';
import Map from '../components/leaflet';
import BingMap from '../components/bingmaps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Map />
          <BingMap />
        </header>
      </div>
    );
  }
}

export default App;
