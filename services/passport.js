const GoogleStrategy = require('passport-google-oauth20').Strategy,
      GithubStrategy = require('passport-github').Strategy,
      TwitterStrategy = require('passport-twitter').Strategy,
      passport = require('passport'),
      keys = require('../keys/keys'),
      User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user._id);
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(null, user)
    })
})

passport.use( 
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
        // Check whether user exists
            const existingUser = await User.findOne({ id: profile.id});
            if (existingUser) {
                return done(null, existingUser);
            }
            
            // Create new User
            const newUser =  await new User({ 
                id: profile.id,
                fullName: profile.displayName,
                firstName: profile.name.givenName,
                avatar: profile._json.image.url,
                }).save();
            done(null, newUser);        
    })
);

passport.use(
    new GithubStrategy({
        clientID: keys.githubClientID,
        clientSecret: keys.githubClientSecret,
        redirect_uri: 'auth/github/callback',
        proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log(accessToken)
        console.log(profile)
        // Check whether user exists
        // const existingUser = await User.findOne({ id: profile.id});
        // if (existingUser) {
        //     return done(null, existingUser);
        // }
        
        // // Create new User
        // const newUser =  await new User({ 
        //     id: profile.id,
        //     fullName: profile.displayName,
        //     firstName: profile.name.givenName,
        //     avatar: profile._json.image.url,
        //     }).save();
        // done(null, newUser);
    })
)

passport.use(
    new TwitterStrategy({
        consumerKey: keys.twitterConsumerKey,
        consumerSecret: keys.twitterConsumerSecret,
        callbackURL: 'auth/twitter/callback',
        proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log(accessToken)
        console.log(profile)
        //Check whether user exists
        const existingUser = await User.findOne({ id: profile.id});
        if (existingUser) {
            return done(null, existingUser);
        }
        
        // Create new User
        const newUser =  await new User({ 
            id: profile.id,
            fullName: profile.displayName,
            firstName: profile.name.givenName,
            avatar: profile._json.image.url,
            }).save();
        done(null, newUser);
    })
)