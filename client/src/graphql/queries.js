import gql from "graphql-tag";

export const GET_USER = gql`
  query {
    getUser {
      username
      profileImg
      notes {
        title
        note
      }
      favoriteShops {
        name
        image_url
        city
        state
      }
    }
  }
`;

export const GET_COFFEE_SHOPS = gql`
  query($coordinates: Coordinates!) {
    getCoffeeShops(coordinates: $coordinates) {
      name
      image_url
      phone
      rating
      address
      cityState
      coordinates {
        lat
        lng
      }
    }
  }
`;
