import React, { Component } from 'react';
import SearchBar from './SearchBar';

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