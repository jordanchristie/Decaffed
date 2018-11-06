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

    fetchCoffeeShops = (mapProps, map) => {
        const {google} = mapProps;
        const service = new google.maps.places.PlacesService(map)
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
                zoom={14}
                google={this.props.google}
                onReady={this.fetchCoffeeShops}
                initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
            />
        )
    }
}

export default GoogleApiWrapper({apiKey: 'AIzaSyDUGTleGS8fQgue69O5g4A91DRPJWU8Zfg'})(CoffeeMap);