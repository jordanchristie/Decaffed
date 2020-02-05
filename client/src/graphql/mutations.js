import gql from "graphql-tag";

// User Mutations
export const SIGN_UP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUpUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
    }
  }
`;

// FavoriteShop Mutations
export const ADD_FAVORITE_SHOP = gql`
  mutation(
    $name: String!
    $image_url: String!
    $address: String!
    $cityState: String!
  ) {
    addFavoriteShop(
      name: $name
      image_url: $image_url
      address: $address
      cityState: $cityState
    ) {
      name
      image_url
      address
      cityState
    }
  }
`;

export const REMOVE_FAVORITE_SHOP = gql`
  mutation($_id: String!) {
    removeFavoriteShop(_id: $_id) {
      _id
    }
  }
`;

// Note Mutations
export const ADD_NOTE = gql`
  mutation($title: String, $note: String!, $name: String!, $location: String!) {
    addNote(title: $title, note: $note, name: $name, location: $location) {
      title
      note
      name
      location
    }
  }
`;
