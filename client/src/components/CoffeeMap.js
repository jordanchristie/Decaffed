import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    GoogleApiWrapper,
    Map,
    Marker,
    InfoWindow
} from 'google-maps-react';

import { fetchCoffeeShops } from '../actions';
import keys from '../keys.json';
import './CoffeeMap.css';

class CoffeeMap extends Component {

    // componentDidMount() {
    //     this.loadCoffeeShops();
    // }
    
    loadCoffeeShops = () => {
        this.props.fetchCoffeeShops(this.props.coordinates, this.props.google)
    }

    renderMarkers = () => {
        console.log(this.props.coffeeShops)
        const {google, coffeeShops} = this.props
        coffeeShops.map((shop, i) => {
            return <Marker 
                        key={i}
                        animation={google.maps.Animation.DROP}
                    />
        })
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        console.log(this.props.coffeeShops)
        return (
            <div id="map">
                <button onClick={this.loadCoffeeShops}></button>
                <Map
                    item
                    xs={14}
                    style={style}
                    zoom={14}
                    google={this.props.google}
                    initialCenter={this.props.coordinates}
                >
                </Map>
            </div>   
        )
    }
}

const mapStateToProps = ({coordinates, coffeeShops}) => {
    return {coordinates, coffeeShops};
}


const apiWrapper = GoogleApiWrapper({apiKey: keys.GoogleAPIKey})(CoffeeMap)

export default connect(mapStateToProps, {fetchCoffeeShops})(apiWrapper);