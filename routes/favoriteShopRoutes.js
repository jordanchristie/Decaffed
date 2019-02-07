const express = require('express'),
      FavoriteShop = require('../models/FavoriteShop'),
      app = express();

module.exports = (app) => {
    // Get all favorites
    app.get('/api/favorites', (req, res) => {

    })
    // addFavorite() action
    app.post('/api/favorites', (req, res) => {
        const shop = req.body;
        console.log(shop.id, shop.name)
    });
    // removeFavorite() action
    app.delete('/api/favorites/:id', (req, res) => {
        console.log(req.body)
    })

}