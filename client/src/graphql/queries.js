import { graphql } from 'react-apollo';
import { gql } from 'graphql-tag';

export const GET_USER = gql`
  query {
    getUser(_id) {
      name
      image_url
      notes
      favoriteShops
    }
  }
`