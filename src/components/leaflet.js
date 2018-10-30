import React, { Component } from 'react';


export default class Map extends Component {

    componentDidMount() {
        var map;
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