import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import { GET_COFFEE_SHOPS } from '../graphql/queries';
import { Query } from 'react-apollo';
// import { Spring } from 'react-spring';
import styled from 'styled-components';

import ShopDetails from './ShopDetails';
// import { fetchCoffeeShops } from '../actions';
import keys from '../keys.json';

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

    updateMap = (map, getCoffeeShops) => {
        const newCenter = {
            lat: map.center.lat(),
            lng: map.center.lng()
        }
        getCoffeeShops(newCenter); 
        
    }

    addNote = () => {
        console.log('hi there')
    }

    render() {
        const style = {
            width: '100vw',
            height: this.state.infoWindowOpen ? '40vh' : '100vh'
        }
        const {coordinates} = this.props.location.state;
        return (
            <Query query={GET_COFFEE_SHOPS} variables={{coordinates: this.props.coordinates}}>
                {(getCoffeeShops, { data, loading, error }) => {
                    if (loading) return <h1>Loading...</h1>
                    return (
                        <MapWrapper>
                            <Map
                                item
                                xs={14}
                                style={style}
                                zoom={14}
                                google={this.props.google}
                                initialCenter={this.props.coordinates}
                                onClick={this.mapClick}
                                onDragend={e => this.updateMap(e, getCoffeeShops)}
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
                                <ShopDetails shop={this.state.selectedPlace} open={this.state.infoWindowOpen} />
                            :
                                null
                            }
                        </MapWrapper> 
                    )
                }}
            </Query>  
        )
    }
}

// const mapStateToProps = ({coordinates, coffeeShops}) => {
//     return {coordinates, coffeeShops};
// }




export default GoogleApiWrapper({apiKey: keys.GoogleAPIKey})(CoffeeMap)

const MapWrapper = styled.main`
    height: 100vh;
    width: 100vw;
`