import React, { Component } from "react";
import { GoogleComponent } from "react-google-location";
import { LocationOn } from "@material-ui/icons";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import keys from "../keys.json";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { coordinates: {} };
  }

  handleSearch = e => {
    this.setState({ coordinates: e.coordinates });
  };

  getGeolocation = () => {
    if (window.navigator) {
      window.navigator.geolocation.getCurrentPosition(position => {
        const res = {
          coordinates: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        };
        this.handleSearch(res);
      });
    }
  };

  render() {
    const { coordinates } = this.state;

    return (
      <>
        <GoogleComponent
          style={{ width: "70%" }}
          apiKey={keys.GoogleAPIKey}
          coordinates={true}
          onChange={e => this.handleSearch(e)}
        >
          <i className="fa fa-search" />
        </GoogleComponent>
        <Geolocator onClick={this.getGeolocation}>
          <LocationOn />
          {Object.getOwnPropertyNames(coordinates).length
            ? "Location found!"
            : "Find my location"}
        </Geolocator>

        <Link
          to={{
            pathname: "/map",
            state: { coordinates }
          }}
          style={{ textAlign: "center" }}
        >
          <SearchButton>Find Coffee</SearchButton>
        </Link>
      </>
    );
  }
}

export default withRouter(SearchBar);

// const SearchInput = styled(GoogleComponent)`
//     margin-bottom: 2em;
// `

const SearchButton = styled.button`
  margin: 2em;
  font-size: 24px;
`;

const Geolocator = styled.div`
  text-align: center;
  margin: 2em;
`;
