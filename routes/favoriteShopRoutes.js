const express = require('express'),
      User = require('../models/User'),
      app = express();

module.exports = (app) => {
    // Get all favorites
    app.get('/api/favorites', (req, res) => {
        User.findOne({_id: req.user._id}, (error, user) => {
            res.send(user.favoriteShops)
        })
    });
    // addFavorite() action
    app.post('/api/favorites', (req, res) => {
        //add id, name, image_url, location.display_address
        const { name, image_url, location: {display_address} } = req.body;
        console.log(name, image_url, display_address)
        // User.findOneAndRemove({id: req.user._id}, (error, user) => {
        //     user.favoriteShops.push({
        //         name,
        //         image_url,
        //         address: {
        //             street: display_address[0],
        //             city: display_address[1]
        //         }
        //     })
        // })
    });
    // removeFavorite() action
    app.delete('/api/favorites/:id', (req, res) => {
        console.log(req.body)
        User.findOne({id: req.user._id}, (error, user) => {
        })
    });

}