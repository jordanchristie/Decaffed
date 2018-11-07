import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    GoogleApiWrapper,
    Map,
    Marker,
    InfoWindow
} from 'google-maps-react';

import apiKey from '../keys';

class CoffeeMap extends Component {


    render() {
        console.log(apiKey)
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
            <Map
                item
                xs={14}
                style={style}
                zoom={14}
                google={this.props.google}
                onReady={this.props.fetchCoffeeShops}
                initialCenter = {this.props.coordinates}
            />
        )
    }
}

const mapStateToProps = ({coordinates, coffeeShops}) => {
    return {coordinates, coffeeShops};
}


const apiWrapper = GoogleApiWrapper({apiKey})(CoffeeMap)

export default connect(mapStateToProps)(apiWrapper);