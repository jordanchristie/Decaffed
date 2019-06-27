import gql from "graphql-tag";

// User Mutations
export const SIGN_UP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUpUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

// FavoriteShop Mutations
export const ADD_FAVORITE_SHOP = gql`
  mutation(
    $name: String!
    $image_url: String!
    $city: String!
    $state: String!
  ) {
    addFavoriteShop(
      name: $name
      img_url: $img_url
      address: $address
      city: $city
      state: $state
    ) {
      name
      img_url
      city
      state
    }
  }
`;

export const REMOVE_FAVORITE_SHOP = gql`
  mutation($id: String!) {
    removeFavoriteShop(id: $id) {
      id
    }
  }
`;

// Note Mutations
export const ADD_NOTE = gql`
  mutation($title: String!, $note: String!) {
    addNote(title: $title, note: $note) {
      title
      note
    }
  }
`;
