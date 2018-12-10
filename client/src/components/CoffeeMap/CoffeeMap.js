import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { Spring } from 'react-spring';

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

    
    selectMarker = (props, marker) => {
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
            height: this.state.infoWindowOpen ? '40vh' : '100vh'
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
                </Map>
                { this.state.infoWindowOpen ?
                    <Spring
                        delay={5000}
                        from={{height: 100, opacity: 0}}
                        to={{height: 472, opacity: 1}}>
                       { ({height, opacity}) => <ShopDetails style={{height, opacity}} shop={this.state.selectedPlace} open={this.state.infoWindowOpen} />
                       }
                    </Spring>
                :
                    null
                }
            </div>   
        )
    }
}

const mapStateToProps = ({coordinates, coffeeShops}) => {
    return {coordinates, coffeeShops};
}


const apiWrapper = GoogleApiWrapper({apiKey: keys.GoogleAPIKey})(CoffeeMap)

export default connect(mapStateToProps, {fetchCoffeeShops})(apiWrapper);