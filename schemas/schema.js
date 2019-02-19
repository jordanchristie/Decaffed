const { GraphQLObjectType,
        GraphQLList,
        GraphQLString,
        GraphQLSchema,
        GraphQLID
    } = require('graphql');

const User = require('../models/User');
const Notes = require('../models/Note');
const FavoriteShops = require('../models/FavoriteShop');


const NoteType = new GraphQLObjectType({
    name: 'Note',
    fields: () => ({
        title: {type: GraphQLString},
        note: {type: GraphQLString}
    })
})

const FavoriteShopType = new GraphQLObjectType({
    name: 'FavoriteShop',
    fields: () => ({
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
        name: {type: GraphQLString},
        profileImg: {type: GraphQLString},
        notes: {
            type: new GraphQLList(NoteType),
            resolve(args) {
                //return User.find()
            }
        },
        favoriteShops: {
            type: new GraphQLList(FavoriteShopType),
            resolve(args) {
                //return User.find()
            }
        }
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                console.log(args)
                //return User.findById({id: args._id})
            }
        },
        notes: {
            type: new GraphQLList(NoteType),
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                console.log(args)
            }
        },
        favoriteShops: {
            type: new GraphQLList(FavoriteShopType),
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                console.log(args)

            }
        }
    }
})



module.exports = new GraphQLSchema({
    query: RootQuery
})
