import React from "react";
import { Query } from "react-apollo";
import { GET_USER } from "./graphql/queries";

//user: 102694616703030500000

const withAuth = Component => props => (
  <Query query={GET_USER} variables={{ _id: null }}>
    {({ data, loading, refetch }) => {
      console.log(data);
      if (loading) return null;
      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);

export default withAuth;
