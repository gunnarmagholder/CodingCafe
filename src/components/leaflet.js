import React, { Component } from 'react';


export default class Map extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
           // console.log("Loading map into #mymap...");
            var map = new Microsoft.Maps.Map('#myMap', {});
            //Request the user's location
            navigator.geolocation.getCurrentPosition(function (position) {
                var loc = new Microsoft.Maps.Location(
                    position.coords.latitude,
                    position.coords.longitude);
                //Add a pushpin at the user's location.
                var pin = new Microsoft.Maps.Pushpin(loc);
                map.entities.push(pin);
                //Center the map on the user's location.
                map.setView({ center: loc, zoom: 15 });
                });
            }
    render() {
        return(
            <div id="myMap">

            </div>
        );
    }
}