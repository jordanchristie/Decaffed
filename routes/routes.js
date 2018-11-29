const express = require('express'),
      app = express();

module.exports = (app) => {

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    // Get all favorites
    app.get('/api/favorites', (req, res) => {
        console.log(req.body)
    })
    // addFavorite() action
    app.post('/api/favorites', (req, res) => {
        console.log(req.body);
    });
}
