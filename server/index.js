const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      passport = require('passport'),
      { ApolloServer } = require('apollo-server-express'),
      keys = require('./keys/keys'),
      User = require('./models/User'),
      FavoriteShop = require('./models/FavoriteShop'),
      Note = require('./models/Note'),
      { typeDefs } = require('./graphql/schema'),
      { resolvers } = require('./graphql/resolvers'),
      PORT = process.env.PORT || 5000,
      app = express();
require('./auth/passport');
      
// Initialize MongoDB
mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console));
db.once('open', () => console.log('connected to Mongo 🐵'))

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({secret: keys.expressKey, resave: true, saveUninitialized: true}))

app.use(passport.initialize());
app.use(passport.session());

require('./routes/userRoutes')(app);


require('./routes/routes')(app);


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
