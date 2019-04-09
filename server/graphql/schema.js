const { gql } = require("apollo-server-express");

exports.typeDefs = gql`
  type Query {
    getUser(_id: ID!): User
    getCoffeeShops(coordinates: Coordinates): [CoffeeShop]!
    getAllNotes(_id: ID!): [Note]
    getAllFavoriteShops(_id: ID!): [FavoriteShop]
  }

  input Coordinates {
    lat: Float!
    lng: Float!
  }

  type Note {
    _id: ID!
    title: String!
    note: String!
  }

  type FavoriteShop {
    _id: ID!
    name: String!
    image_url: String!
    city: String!
    state: String!
  }

  type CoffeeShop {
    name: String
    image_url: String
    city: String
    state: String
  }

  type User {
    _id: ID!
    name: String!
    profileImg: String!
    notes: [Note]
    favoriteShops: [FavoriteShop]
  }
  type Mutation {
    addUser(_id: String!): User
    removeUser(_id: String!): User
    addFavoriteShop(
      name: String!
      image_url: String!
      city: String!
      state: String!
    ): FavoriteShop
    addNote(title: String!, note: String!): Note
    editNote(_id: ID!): Note
    removeNote(_id: ID!): Note
  }
`;
