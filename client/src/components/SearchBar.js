import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

    render() {
        return (
            <>
                <GoogleComponent
                        style={{width: '70%'}} 
                        apiKey={keys.GoogleAPIKey}
                        coordinates={true}
                        onChange={e => this.handleSearch(e)}
                    >
                    <i className="fa fa-search"></i>
                </GoogleComponent>
                <Link to={{pathname: "/map", state: {coordinates: this.state.coordinates}}}>
                <SearchButton>Find Coffee</SearchButton>
                </Link>
            </>
        )
    }
}

export default SearchBar;

// const SearchInput = styled(GoogleComponent)`
//     margin-bottom: 2em;
// `

const SearchButton = styled.button`
    margin-top: 2em;
    font-size: 24px;
`