const express = require('express'),
      passport = require('passport')
      app = express();

module.exports = (app) => {
      // github
      app.get('/auth/github', passport.authenticate('github', {
            scope: ['user:email']
      }));
    
        app.get('/auth/github/callback', passport.authenticate('github', {
            failureRedirect: '/'
      }), (req, res) => {
            res.send(req.user)
            res.redirect('/dashboard')
      })


      // Google
      app.get('/auth/google', passport.authenticate('google', {
            scope: ['email', 'profile']
        }));
    
      app.get('/auth/google/callback', passport.authenticate('google', {
            failureRedirect: '/'
      }), (req, res) => {
            res.redirect('/dashboard')
            
      })

      // Twitter
      app.get('/auth/twitter', passport.authenticate('twitter'));
    
      app.get('/auth/twitter/callback', passport.authenticate('twitter', {
            failureRedirect: '/'
      }), (req, res) => {
            res.redirect('/dashboard')
      })

}