import React from 'react';
import SearchBar from './SearchBar';
import { GET_USER } from '../graphql/queries';
import { Query } from 'react-apollo';

const Home = () => (
       
    <Query query={GET_USER} variables={{ _id: 102694616703030500000 }}>
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

export default Home