const express = require('express'),
      Note = require('../models/Note'),
      app = express();

module.exports = (app) => {
    // Set headers
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.get('/auth/user', (req, res) => {
        res.send(req.user)
  })

    app.get('/auth/logout',(req, res) => {
        req.logout();
        res.redirect('/');
  })
}
