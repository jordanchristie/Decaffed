import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper, Map } from 'google-maps-react';

import CoffeeShop from './CoffeeShop';
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
        const {coffeeShops} = this.props
        coffeeShops.map((shop, i) => {
            return <CoffeeShop
                        key={shop.id}
                        coffeeShop={shop}
                    />
        })
    }

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
                    initialCenter={this.props.coordinates}
                    onReady={this.renderMarkers()}
                >
                {this.renderMarkers}
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