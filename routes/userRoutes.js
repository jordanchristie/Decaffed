const express = require('express'),
      User = require('../models/User'),
      passport = require('passport')
      app = express();

module.exports = (app) => {
      const auth = (url, callbackUrl, strategy, options) => {
            app.get(url, passport.authenticate(strategy, options))

            app.get(callbackUrl, passport.authenticate({
                  successRedirect: '/dashboard',
                  failureRedirect: '/'
                  }))
      }

      auth('/auth/github', 'auth/github/callback', 'github', {
            scope: ['user:email']
      })
      auth('/auth/google', 'auth/google/callback', 'google', {
            scope: ['profile']
      })
      auth('/auth/twitter', 'auth/twitter/callback', 'twitter')
}