import React, { Component } from "react";
// import { connect } from 'react-redux';
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import { GET_COFFEE_SHOPS } from "../graphql/queries";
import { Query } from "react-apollo";
// import { Spring } from 'react-spring';
import styled from "styled-components";

import ShopDetails from "./ShopDetails";
// import { fetchCoffeeShops } from '../actions';
import keys from "../keys.json";

class CoffeeMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: props.location.state.coordinates,
      activeMarker: null,
      selectedPlace: {},
      infoWindowOpen: false
    };
  }

  selectMarker = (props, marker) => {
    console.log("marker clicked");
    this.setState({
      activeMarker: marker,
      selectedPlace: props.shop,
      infoWindowOpen: true
    });
  };

  mapClick = () => {
    if (this.state.infoWindowOpen) {
      this.setState({
        activeMarker: {},
        infoWindowOpen: false
      });
    }
  };

  updateMap = (mapProps, map, refetch) => {
    console.log(map);
    const newCenter = {
      lat: map.center.lat(),
      lng: map.center.lng()
    };
    this.setState({ coordinates: newCenter });
    refetch(this.state.coordinates);
  };

  addNote = () => {
    console.log("hi there");
  };

  render() {
    const mapStyle = {
      width: "100vw",
      height: this.state.infoWindowOpen ? "40vh" : "100vh"
    };
    const {
      coordinates,
      selectedPlace,
      selectMarker,
      infoWindowOpen
    } = this.state;
    console.log(selectedPlace);
    return (
      <Query query={GET_COFFEE_SHOPS} variables={{ coordinates }}>
        {({ data, loading, error, refetch }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <h1>Error...</h1>;
          return (
            <>
              <Map
                item
                xs={14}
                style={mapStyle}
                zoom={14}
                google={this.props.google}
                initialCenter={coordinates}
                onClick={this.mapClick}
                onDragend={(mapProps, map) =>
                  this.updateMap(mapProps, map, refetch)
                }
              >
                {data.getCoffeeShops.map((shop, i) => {
                  return (
                    <Marker
                      key={i}
                      shop={shop}
                      title={shop.name}
                      name={shop.name}
                      position={{
                        lat: shop.coordinates.lat,
                        lng: shop.coordinates.lng
                      }}
                      onClick={selectMarker}
                    />
                  );
                })}
              </Map>
              {infoWindowOpen ? (
                <ShopDetails shop={selectedPlace} open={infoWindowOpen} />
              ) : null}
            </>
          );
        }}
      </Query>
    );
  }
}

export default GoogleApiWrapper({ apiKey: keys.GoogleAPIKey })(CoffeeMap);

const MapWrapper = styled.main`
  height: 100vh;
  width: 100vw;
`;
