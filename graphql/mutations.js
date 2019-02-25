const User = require('../models/User')
const { UserType } = require('../graphql/schema')
const { GraphQLObjectType } = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {

    },
    getFavorite: {

    },
    addFavorite: {

    },
    removeFavorite: {

    },
    addNote: {

    },
    editNote: {

    },
    removeNote: {

    }
  }
})