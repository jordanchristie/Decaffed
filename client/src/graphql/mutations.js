import { graphql } from 'react-apollo';
import { gql } from 'graphql-tag';

export const ADD_USER = gql`
  mutation {
    addUser(_id) {
      
    }
  }
`