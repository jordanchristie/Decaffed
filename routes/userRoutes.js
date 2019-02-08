const express = require('express'),
      User = require('../models/User'),
      passport = require('passport')
      app = express();

module.exports = (app) => {
      const auth = (url, callbackUrl, strategy) => {
            app.get(url, passport.authenticate(strategy))

            app.get(callbackUrl, passport.authenticate({
                  successRedirect: '/dashboard',
                  failureRedirect: '/'
                  }))
      }

      auth('/auth/github', 'auth/github/callback', 'github')
      auth('/auth/google', 'auth/google/callback', 'google')
      auth('/auth/twitter', 'auth/twitter/callback', 'twitter')
}