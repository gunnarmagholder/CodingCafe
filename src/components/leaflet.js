import React, { Component } from 'react';


export default class Map extends Component {

    componentDidMount() {
        var map;
        function GetMap()
        {
            console.log("Map loaded - calling getMap()");
            map = new window.Microsoft.Maps.Map('#myMap', {});
  
            createColoredPushpin(map.getCenter(), 'red', function (pin) {
              map.entities.push(pin);
            });   
        }
        function createColoredPushpin(location, color, callback) {
           console.log("Creating PushPin");
           var img = new Image();
           img.onload = function () {
               var c = document.createElement('canvas');
               c.width = img.width;
               c.height = img.height;
    
               var context = c.getContext('2d');
    
               //Draw a colored circle behind the pin
               context.beginPath();
               context.arc(13, 13, 11, 0, 2 * Math.PI, false);
               context.fillStyle = color;
               context.fill();
    
               //Draw the pushpin icon
               context.drawImage(img, 0, 0);
    
               var pin = new window.Microsoft.Maps.Pushpin(location, {
                   //Generate a base64 image URL from the canvas.
                   icon: c.toDataURL(),
                   anchor: new window.Microsoft.Maps.Point(12, 39)
               });
    
               if (callback) {
                   callback(pin);
               }
           };
    
           img.src = 'images/TransparentPushpin.png';
        }
        function loadMap() {
            if (!map) {
                var mapScriptUrl = 'https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AqB1sYdWKuQ-n2Jbk0Cgr9A7_DvWLeLIWvhfgOxzzG8VgHCpLeSfDMI6QBoRF5I8';
                var script = document.createElement("script");
                script.setAttribute('defer', '');
                script.setAttribute('async', '');
                script.setAttribute("type", "text/javascript");
                script.setAttribute("src", mapScriptUrl);
                document.body.appendChild(script);
            }
        }
        loadMap();
    }
    render() {
        return(
            <div id="myMap" style={{position:"relative",width:"400px",height:"300px"}}></div>
        );
    }
}