import React, { Component } from 'react';
import {
    GoogleApiWrapper,
    Map,
    Marker,
    InfoWindow
} from 'google-maps-react';

class CoffeeMap extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const style = {
            width: '100vw',
            height: '50vh'
        }
        return (
            <Map
                item
                xs={14}
                style={style}
                google={this.props.google}
                zoom={14}
                initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
            />
        )
    }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyDUGTleGS8fQgue69O5g4A91DRPJWU8Zfg'})(CoffeeMap);