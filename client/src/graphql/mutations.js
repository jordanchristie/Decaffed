import { graphql } from 'react-apollo';
import { gql } from 'graphql-tag';

export const ADD_USER = gql`
  mutation {
    addUser(_id) {
      name
      profileImg
    }
  }
`

export const ADD_FAVORITE_SHOP = gql`
  mutation ($name: String!, $image_url: String!){
    addFavoriteShop(name: $name, img_url: $img_url) {
      name
      img_url
    }
  }
`