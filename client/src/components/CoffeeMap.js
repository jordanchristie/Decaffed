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
    super();
    this.state = {
      activeMarker: null,
      selectedPlace: {},
      infoWindowOpen: false
    };
  }

  selectMarker = (props, marker) => {
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

  updateMap = (map, refetch) => {
    const newCenter = {
      lat: map.center.lat(),
      lng: map.center.lng()
    };
    refetch(newCenter);
  };

  addNote = () => {
    console.log("hi there");
  };

  render() {
    const style = {
      width: "100vw",
      height: this.state.infoWindowOpen ? "40vh" : "100vh"
    };
    const { coordinates } = this.props.location.state;
    return (
      <Query query={GET_COFFEE_SHOPS} variables={{ coordinates }}>
        {({ data, loading, error, refetch }) => {
          if (loading) return <h1>Loading...</h1>;
          if (error) return <h1>Error...{error}</h1>;
          return (
            //<h1>Hi</h1>
            <>
              <Map
                item
                xs={14}
                style={style}
                zoom={14}
                google={this.props.google}
                initialCenter={coordinates}
                onClick={this.mapClick}
                onDragend={e => this.updateMap(e, refetch)}
              >
                {data.getCoffeeShops.map((shop, i) => {
                  console.log(shop.name);
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
                      onClick={this.selectMarker}
                    />
                  );
                })}
              </Map>
              {this.state.infoWindowOpen ? (
                <ShopDetails
                  shop={this.state.selectedPlace}
                  open={this.state.infoWindowOpen}
                />
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
