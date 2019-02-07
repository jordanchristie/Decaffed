import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchCoordinates, fetchCoffeeShops } from '../actions';

import keys from '../keys.json';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state={coordinates: {}}
    }

    handleSearch = (e) => {
        this.setState({coordinates: e.coordinates});
        console.log(this.state.coordinates)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.coordinates) {
            this.props.fetchCoordinates(this.state.coordinates,this.props.history);
            this.props.fetchCoffeeShops(this.state.coordinates);
        } else return;
        
    }

    render() {
        return (
            <>
                <GoogleComponent 
                        apiKey={keys.GoogleAPIKey}
                        coordinates={true}
                        onChange={e => this.handleSearch(e)}
                    >
                    <i className="fa fa-search"></i>
                </GoogleComponent>
                <SearchButton onClick={this.handleSubmit}>Find Coffee</SearchButton>
            </>
        )
    }
}

const mapStateToProps = ({coordinates}) => {
    return {coordinates};
}

export default connect(mapStateToProps, {fetchCoordinates, fetchCoffeeShops})(SearchBar);

// const SearchInput = styled(GoogleComponent)`
//     margin-bottom: 2em;
// `

const SearchButton = styled.button`
    margin-top: 2em;
    font-size: 24px;
`