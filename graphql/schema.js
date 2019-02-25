const { GraphQLObjectType,
        GraphQLList,
        GraphQLString,
        GraphQLSchema,
        GraphQLNonNull,
        GraphQLID
    } = require('graphql');

const { UserType, NoteType, FavoriteShopType } = require('./types');
const mutation = require('./mutations');


const query = new GraphQLObjectType({
    name: 'Query',
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
    query,
    mutation
})
