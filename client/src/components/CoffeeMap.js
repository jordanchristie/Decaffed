import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

import { fetchCoffeeShops } from '../actions';
import keys from '../keys.json';
import './CoffeeMap.css';

class CoffeeMap extends Component {
    constructor(props) {
        super();
        this.state = {
            activeMarker: null,
            selectedPlace: {},
            infoWindowOpen: false
        }
    }

    
    selectMarker = (props,marker) => {
        this.setState({
            activeMarker: marker,
            selectedPlace: props.shop,
            infoWindowOpen: true
        })
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        const {selectedPlace} = this.state;
        return (
            <div id="map">
                <Map
                    item
                    xs={14}
                    style={style}
                    zoom={17}
                    google={this.props.google}
                    initialCenter={this.props.coordinates}
                >
                {this.props.coffeeShops.map((shop, i) => {
                return <Marker
                        key={i}
                        shop={shop} 
                        title={shop.name}
                        name={shop.name}
                        position={{lat: shop.coordinates.latitude, lng: shop.coordinates.longitude}}
                        onClick={this.selectMarker}/>
                })}
                { 
                    this.state.activeMarker && (
                        <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.infoWindowOpen}
                        onClick={this.renderModal}
                        >
                        <div className="shop-details">
                            <img src={selectedPlace.image_url} alt="place" className="shop-img"/>
                            <h4>{selectedPlace.name}</h4>
                            <i className="fa fa-envelope"></i>{selectedPlace.location.address1} <br/>
                            {selectedPlace.location.city}, {selectedPlace.location.state}
                            {selectedPlace.location.zip_code}<br />
                            <i className="fa fa-phone"></i>{selectedPlace.phone} <br/>
                            <i className="fa fa-star"></i>{selectedPlace.rating}/5
                       </div>
                        </InfoWindow>
                    )
                }
                
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