import React, { Component } from 'react';
import SearchBar from './SearchBar';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div id="home">
                <h1>Decaffed</h1>
                <h3>Find a coffee shop nearby to recaffeinate.</h3>
                <SearchBar {...this.props}/>
            </div>
        )
    }
}

export default Home