const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
    type Query {
        getUser(_id: String!): User
    }

    type Note {
        _id: ID!
        title: String!
        note: String!
    }

    type FSAddress {
        street: String!
        city: String!
    }

    type FavoriteShop {
        _id: ID!
        image_url: String
        address: FSAddress!
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
        addFavoriteShop(name: String!, image_url: String! ): FavoriteShop
        addNote(_id: String!, title: String!, note: String!): Note
        editNote(_id: String!): Note
        removeNote(_id: String!): Note
    }
`
