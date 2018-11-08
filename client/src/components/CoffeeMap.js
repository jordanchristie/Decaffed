import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    GoogleApiWrapper,
    Map,
    Marker,
    InfoWindow
} from 'google-maps-react';

import { fetchCoffeeShops } from '../actions';
import apiKey from '../keys';
import './CoffeeMap.css';

class CoffeeMap extends Component {
    
    loadCoffeeShops = () => {
        this.props.fetchCoffeeShops(this.props.coordinates, this.props.google)
    }

    // renderMarkers = () => {
    //     console.log(this.props.coffeeShops)
    //     this.props.coffeeShops.map((shop, i) => {
    //         return <Marker />
    //     })
    // }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }

        return (
            <div id="map">
                <Map
                    item
                    xs={14}
                    style={style}
                    zoom={14}
                    google={this.props.google}
                    onReady={this.loadCoffeeShops}
                    initialCenter={this.props.coordinates}
                />
            </div>   
        )
    }
}

const mapStateToProps = ({coordinates, coffeeShops}) => {
    return {coordinates, coffeeShops};
}


const apiWrapper = GoogleApiWrapper({apiKey})(CoffeeMap)

export default connect(mapStateToProps, {fetchCoffeeShops})(apiWrapper);