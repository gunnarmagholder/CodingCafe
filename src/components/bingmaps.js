import React, { Component } from 'react';

import { ReactBingmaps } from 'react-bingmaps';

export default class BingMap extends Component {
    render() {
        return(
            <div>
                <ReactBingmaps
                    bingmapKey = "AqB1sYdWKuQ-n2Jbk0Cgr9A7_DvWLeLIWvhfgOxzzG8VgHCpLeSfDMI6QBoRF5I8"
                    center = {[13.0827, 80.2707]}>
                </ReactBingmaps>
            </div>
        );
    }
}