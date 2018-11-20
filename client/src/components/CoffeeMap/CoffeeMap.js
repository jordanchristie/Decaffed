import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

import ShopDetails from './ShopDetails/ShopDetails';
import { fetchCoffeeShops } from '../../actions';
import keys from '../../keys.json';
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

    mapClick = () => {
        if (this.state.infoWindowOpen) {
            this.setState({
                activeMarker: {},
                infoWindowOpen: false,
            })
        }
    }

    updateMap = (mapProps, map) => {
        const newCenter = {
            lat: map.center.lat(),
            lng: map.center.lng()
        }
        this.props.fetchCoffeeShops(newCenter); 
        
    }

    addNote = () => {
        console.log('hi there')
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
                    zoom={14}
                    google={this.props.google}
                    initialCenter={this.props.coordinates}
                    onClick={this.mapClick}
                    onDragend={this.updateMap}
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
                        className="infowindow"
                        marker={this.state.activeMarker}
                        visible={this.state.infoWindowOpen}
                        selectedPlace={selectedPlace}
                        addNote={this.addNote}
                        >
                        <ShopDetails shop={selectedPlace}  />
                        {this.props.children}
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