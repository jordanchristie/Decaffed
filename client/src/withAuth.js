import React from "react";

import { Query } from "react-apollo";
import { GET_USER } from "./graphql/queries";

const withAuth = Component => props => (
  <Query query={GET_USER}>
    {({ data, loading, refetch }) => {
      console.log(data);
      if (loading) return null;

      return <Component user={data} refetch={refetch} />;
    }}
  </Query>
);

export default withAuth;
