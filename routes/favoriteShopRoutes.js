const express = require('express'),
      User = require('../models/User'),
      app = express();

module.exports = (app) => {
    // Get all favorites
    app.get('/api/favorites', (req, res) => {
        User.findOne({_id: req.user._id}, (error, user) => {
            res.send(user.favoriteShops)
        })
    })
    // addFavorite() action
    app.post('/api/favorites', (req, res) => {
        //add id, name, image_url, location.display_address || coordinates
        const { id, name, image_url, coordinates } = req.body;
        console.log(id, name, image_url, coordinates)
    });
    // removeFavorite() action
    app.delete('/api/favorites/:id', (req, res) => {
        console.log(req.body)
        User.findOne({id: req.user._id}, (error, user) => {
        })
    })

}