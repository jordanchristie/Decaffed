const express = require('express'),
      FavoriteShop = require('../models/FavoriteShop'),
      app = express();

module.exports = (app) => {
    // Get all favorites
    app.get('/api/favorites', (req, res) => {
        console.log(req.body)

    })
    // addFavorite() action
    app.post('/api/favorites', (req, res) => {
        console.log(req.body);
    });
    // removeFavorite() action
    app.delete('/api/favorites/:id', (req, res) => {
        console.log(req)
    })

}