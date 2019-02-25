const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      passport = require('passport'),
      graphqlHTTP = require('express-graphql'),
      keys = require('./keys/keys'),
      schema = require('./graphql/schema')
      PORT = process.env.PORT || 5000,
      app = express();

require('./models/User');
require('./services/passport');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))



mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console));
db.once('open', () => console.log('connected to Mongo'))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api', graphqlHTTP({
      schema,
      graphiql: true,
      pretty: true
}))


//Routes
//require('./routes/routes')(app);
//require('./routes/userRoutes')(app);
// require('./routes/favoriteShopRoutes')(app);
// require('./routes/notesRoutes')(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

