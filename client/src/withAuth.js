import React from 'react';
import { Query } from 'react-apollo';
import { GET_USER } from './graphql/queries';

const withAuth = Component => props => (
  <Query query={GET_USER}>
    {({data, loading, refetch}) => {
      if (loading) return null;
      return <Component {...props} refetch={refetch} session={data} />
    }}
  </Query>
)

export default withAuth;