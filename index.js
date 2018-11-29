const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      PORT = 5000,
      app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// Routes
require('./routes/routes')(app);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

