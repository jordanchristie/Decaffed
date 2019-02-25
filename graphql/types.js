const { GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLID
} = require('graphql');

const NoteType = new GraphQLObjectType({
  name: 'Note',
  fields: () => ({
      _id: {type: new GraphQLNonNull(GraphQLID)},
      title: {type: GraphQLString},
      note: {type: GraphQLString}
  })
})

const FavoriteShopType = new GraphQLObjectType({
  name: 'FavoriteShop',
  fields: () => ({
      _id: {type: new GraphQLNonNull(GraphQLID)},
      name: {type: GraphQLString},
      image_url: {type: GraphQLString},
      // address: {
      //     street: {type: GraphQLString},
      //     city: {type: GraphQLString}
      // }
  })
})

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
      _id: {type: new GraphQLNonNull(GraphQLID)},
      name: {type: GraphQLString},
      profileImg: {type: GraphQLString},
      notes: {
          type: new GraphQLList(NoteType),
          resolve(parent, args) {
              //const { _id } = args;
              //return User.find({ _id })
          }
      },
      favoriteShops: {
          type: new GraphQLList(FavoriteShopType),
          resolve(parent, args) {
              //const { _id } = args
              //return User.find({ _id })
          }
      }
  })
})

module.exports = { UserType, NoteType, FavoriteShopType }