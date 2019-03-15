const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    type Query {
        getUser(_id: String!): User
        getAllNotes(_id: String!): [Note]
        getAllFavoriteShops(_id: String!): [FavoriteShop]
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

    type User {
        _id: String!
        name: String!
        profileImg: String!
        notes: [Note]
        favoriteShops: [FavoriteShop]
    }
    type Mutation {
        addUser(_id: String!): User
        removeUser(_id: String!): User
        addFavoriteShop(name: String!, image_url: String!, city: String!
        state: String! ): FavoriteShop
        addNote(_id: String!, title: String!, note: String!): Note
        editNote(_id: String!): Note
        removeNote(_id: String!): Note
    }
`
