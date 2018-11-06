import React, { Component } from 'react';
import { GoogleComponent } from 'react-google-location';
import { connect } from 'react-redux';

import './SearchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state={coordinates: {}}
    }
    handleSearch = (e) => {
        this.setState({coordinates: e.coordinates})
        this.props.fetchLocation(this.state.coordinates)
    }
    render() {
        console.log(this.state.coordinates)
        return <GoogleComponent 
                    apiKey={'AIzaSyDUGTleGS8fQgue69O5g4A91DRPJWU8Zfg'}
                    coordinates={true}
                    onChange={e => this.handleSearch(e)}/>
    }
}

const mapStateToProps = ({coordinates}) => {
    return {
        coordinates
    }
}

export default connect({coordinates})(SearchBar);