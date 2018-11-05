const express = require('express'),
      cors = require('cors'),
      PORT = 5000,
      app = express();

app.use(cors());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

