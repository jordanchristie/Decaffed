import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { GET_USER } from '../graphql/queries';
import { Query } from 'react-apollo';

class Home extends Component {
    render() {
        return (
            <Query query={GET_USER}>
            {(data, loading, error) => {
                console.log(data)
                return (
                    <>
                        <h1>Home Page</h1>
                        <SearchBar />
                    </>
                )
            }}
            </Query>
        )
    }
}

export default Home