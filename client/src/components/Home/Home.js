import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <>    
                <SearchBar {...this.props}/>
            </>
        )
    }
}

export default Home