const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      passport = require('passport'),
      { ApolloServer } = require('apollo-server-express'),
      keys = require('./server/keys/keys'),
      User = require('./server/models/User'),
      FavoriteShop = require('./server/models/FavoriteShop'),
      Note = require('./server/models/Note'),
      { typeDefs } = require('./server/graphql/schema'),
      { resolvers } = require('./server/graphql/resolvers'),
      PORT = process.env.PORT || 5000,
      app = express();
require('./server/auth/passport');
      
// Initialize MongoDB
mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console));
db.once('open', () => console.log('connected to Mongo 🐵'))

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: keys.expressKey, resave: true, saveUninitialized: true}))

app.use(passport.initialize());
app.use(passport.session());

require('./server/routes/userRoutes')(app);


require('./server/routes/routes')(app);


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

if (process.env.NODE_ENV === 'production') {
      app.use(express.static('client/build'));

      const path = require('path');

      app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
      })
}



app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚀`));

