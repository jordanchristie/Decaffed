import { graphql } from 'react-apollo';
import { gql } from 'graphql-tag';

// User Mutations
export const ADD_USER = gql`
  mutation {
    addUser(_id) {
      name
      profileImg
    }
  }
`
// FavoriteShop Mutations
export const ADD_FAVORITE_SHOP = gql`
  mutation ($name: String!, $image_url: String!, $city: String!, $state: String!){
    addFavoriteShop(name: $name, img_url: $img_url, address: $address, city: $city, state: $state) {
      name
      img_url
      city
      state
    }
  }
`

export const REMOVE_FAVORITE_SHOP = gql`
  mutation ($id: String!) {
    removeFavoriteShop(id: $id) {

    }
  }
`

