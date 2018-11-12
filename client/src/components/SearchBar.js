import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';
import { connect } from 'react-redux';
import { fetchCoordinates } from '../actions';
import './SearchBar.css';

import keys from '../keys.json';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state={coordinates: {}}
    }

    handleSearch = (e) => {
        this.setState({coordinates: e.coordinates});
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.fetchCoordinates(this.state.coordinates, this.props.history);
        
    }

    render() {
        return (
            <>
                <GoogleComponent 
                        apiKey={keys.GoogleAPIKey}
                        coordinates={true}
                        onChange={e => this.handleSearch(e)}
                    />
                <button onClick={this.handleSubmit}>Find Coffee</button>
            </>
        )
    }
}

const mapStateToProps = ({coordinates}) => {
    return {coordinates};
}

export default connect(mapStateToProps, {fetchCoordinates})(SearchBar);