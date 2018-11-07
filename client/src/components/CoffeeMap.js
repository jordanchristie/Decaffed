import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    GoogleApiWrapper,
    Map,
    Marker,
    InfoWindow
} from 'google-maps-react';
import GoogleApiComponent from 'google-maps-react/dist/GoogleApiComponent';

class CoffeeMap extends Component {

    fetchCoffeeShops = (mapProps, map) => {
        const {google} = mapProps;
        const service = new google.maps.places.PlacesService(map)
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        console.log(this.props.coordinates)
        return (
            <Map
                item
                xs={14}
                style={style}
                zoom={14}
                google={this.props.google}
                onReady={this.fetchCoffeeShops}
                initialCenter = {{lng: '-74.42293410000002' , lat: '41.4459271'}}
            />
        )
    }
}

const mapStateToProps = ({coordinates}) => {
    return {coordinates};
}

const apiWrapper = GoogleApiWrapper({apiKey: 'AIzaSyDUGTleGS8fQgue69O5g4A91DRPJWU8Zfg'})(CoffeeMap)

export default connect(mapStateToProps)(apiWrapper);