import React from "react";
import { Redirect } from "react-router-dom";
import { Query } from "react-apollo";
import { GET_USER } from "./graphql/queries";

const withAuth = Component => props => (
  <Query query={GET_USER}>
    {({ data, loading, refetch }) => {
      console.log(data);
      if (loading) return null;

      return data ? (
        <Component user={data.getUser} refetch={refetch} />
      ) : (
        <Redirect to="/" />
      );
    }}
  </Query>
);

export default withAuth;
