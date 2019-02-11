const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      keys = require('./keys/keys'),
      PORT = 5000,
      app = express();

require('./services/passport');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//mongoose.connect(keys.mongoURI);

// Routes
require('./routes/routes')(app);
require('./routes/userRoutes')(app);
require('./routes/favoriteShopRoutes')(app);
require('./routes/notesRoutes')(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

