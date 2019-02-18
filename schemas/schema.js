const graphql = require('graphql');
const { GraphQLObjectType,
        GraphQLList,
        GraphQLString,
        GraphQLSchema
    } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        name: {type: GraphQLString},
        profileImg: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,

        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})
