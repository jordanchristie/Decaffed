const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      { ApolloServer } = require('apollo-server-express'),
      { makeExecutableSchema } = require('graphql-tools');
      keys = require('./keys/keys'),
      User = require('./models/User'),
      FavoriteShop = require('./models/FavoriteShop'),
      Note = require('./models/Note'),
      { typeDefs } = require('./graphql/schema'),
      { resolvers } = require('./graphql/resolvers'),
      PORT = process.env.PORT || 5000,
      app = express();

require('./services/passport');


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console));
db.once('open', () => console.log('connected to Mongo'))

require('./routes/userRoutes')(app);
require('./routes/routes');
const schema = makeExecutableSchema({
      typeDefs,
      resolvers
})

const server = new ApolloServer({ 
      typeDefs,
      resolvers,
      context: ({ req }) => ({
            User,
            FavoriteShop,
            Note
      })
});
server.applyMiddleware({ app })


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

