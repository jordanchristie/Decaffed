const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Query {
    getUser: User
    getCoffeeShops(coordinates: Coordinates): [CoffeeShop]!
    getAllNotes(_id: ID!): [Note]
    getAllFavoriteShops(_id: ID!): [FavoriteShop]
  }

  input Coordinates {
    lat: Float!
    lng: Float!
  }

  type CSCoordinates {
    lat: Float!
    lng: Float!
  }

  type Note {
    _id: ID!
    title: String!
    note: String!
    name: String!
    location: String!
  }

  type FavoriteShop {
    _id: ID!
    name: String!
    image_url: String!
    address: String!
    cityState: String!
  }

  type CoffeeShop {
    name: String
    image_url: String
    coordinates: CSCoordinates
    address: String
    cityState: String
    phone: String
    rating: Float
  }

  type Token {
    token: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    profileImg: String
    notes: [Note]
    favoriteShops: [FavoriteShop]
  }
  type Mutation {
    signUpUser(username: String!, email: String!, password: String!): Token
    loginUser(username: String!, password: String!): Token
    removeUser(_id: String!): User
    addFavoriteShop(
      name: String!
      image_url: String!
      address: String!
      cityState: String!
    ): FavoriteShop
    addNote(
      title: String
      note: String!
      name: String!
      location: String!
    ): Note
    editNote(_id: ID!): Note
    removeNote(_id: ID!): Note
  }
`;
