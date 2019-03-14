const express = require('express'),
      passport = require('passport')
      app = express();

module.exports = (app) => {
      // github
      app.get('/auth/github', passport.authenticate('github', {
            scope: ['user:email']
      }));
    
        app.get('/auth/github/callback', passport.authenticate('github', {
            successRedirect: '/dashboard',
            failureRedirect: '/'
        }));


      // Google
      app.get('/auth/google', passport.authenticate('google', {
            scope: ['email', 'profile']
        }), () => console.log('clicked!'));
    
      app.get('/auth/google/callback', passport.authenticate('google', {
      successRedirect: '/dashboard',
      failureRedirect: '/'
      }));

      // Twitter
      app.get('/auth/twitter', passport.authenticate('twitter'));
    
      app.get('/auth/twitter/callback', passport.authenticate('twitter', {
      successRedirect: '/dashboard',
      failureRedirect: '/'
      }));

}