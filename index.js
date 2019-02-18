const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      graphqlHTTP = require('express-graphql'),
      keys = require('./keys/keys'),
      schema = require('./schemas/schema')
      PORT = process.env.PORT || 5000,
      app = express();

require('./services/passport');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))



mongoose.connect(keys.mongoURI, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console));
db.once('open', () => console.log('connected to Mongo'))

app.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true
}))

// Routes
require('./routes/routes')(app);
require('./routes/userRoutes')(app);
require('./routes/favoriteShopRoutes')(app);
require('./routes/notesRoutes')(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

