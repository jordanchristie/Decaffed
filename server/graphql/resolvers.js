const axios = require("axios");
const bcrypt = require("bcrypt");
const keys = require("../keys/keys");
const { createToken } = require("../util/jwt");

const YelpSearchURL = "https://api.yelp.com/v3/businesses/search?term=cafe";

// parent, args, { User, currentUser }

// getUser is firing before context is assigned!
exports.resolvers = {
  Query: {
    getUser: async (parent, args, { User, currentUser }) => {
      const { username } = await currentUser;
      if (!username) return null;
      const user = await User.findOne({ username });

      return user;
    },

    getCoffeeShops: async (parent, { coordinates }) => {
      const result = await axios.get(
        `${YelpSearchURL}&latitude=${coordinates.lat}&longitude=${
          coordinates.lng
        }`,
        { headers: { Authorization: `Bearer ${keys.yelpAPIKey}` } }
      );

      const data = await result.data.businesses;

      const normalizedData = data.map(
        ({
          name,
          image_url,
          location,
          coordinates,
          rating,
          display_phone
        }) => ({
          name,
          image_url,
          rating,
          phone: display_phone,
          address: location.address1,
          cityState: `${location.city}, ${location.state} ${location.zip_code}`,
          coordinates: {
            lat: coordinates.latitude,
            lng: coordinates.longitude
          }
        })
      );
      return normalizedData;
    },

    getAllNotes: async (parent, { _id }, { User }) => {
      const user = await User.findOne({ _id });
      return user.notes;
    },

    getAllFavoriteShops: async (parent, { _id }, { User }) => {
      const user = await User.findOne({ _id });
      return user.favoriteShops;
    }
  },
  Mutation: {
    // User Mutations
    signUpUser: async (parent, { username, email, password }, { User }) => {
      const existingUser = await User.findOne();
      if (existingUser) throw new Error("User already exists");
      const newUser = await new User({
        username,
        email,
        password
      }).save();

      return {
        token: createToken(newUser, keys.tokenSecret, "12hr")
      };
    },

    loginUser: async (parent, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("No user found");
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        throw new Error("Invalid password");
      }

      return {
        token: createToken(user, keys.tokenSecret, "12hr")
      };
    },

    removeUser: async (parent, { _id }, { User }) => {
      return await User.findOneAndRemove({ _id });
    },

    // FavoriteShop Mutations
    addFavoriteShop: async (
      parent,
      { name, image_url, address, cityState },
      { User, currentUser }
    ) => {
      const user = await User.findOne({ username: currentUser.username });
      const favoriteShop = {
        name,
        image_url,
        address,
        cityState
      };
      user.favoriteShops.push(favoriteShop);
      user.save();
    },

    // Note Mutations
    addNote: async (
      parent,
      { title, note, name, location },
      { User, currentUser, Note }
    ) => {
      const user = await User.findOne({ username: currentUser.username });

      const newNote = {
        title,
        note,
        name,
        location
      };

      user.notes.push(newNote);
      user.save();
    },

    editNote: async (parent, { _id }, { User, Note }) => {
      const user = await User.findOne({ _id });
      const modifiedNote = await Note.findOneAndUpdate({ _id });
    },

    removeNote: async (parent, { _id }, { User }) => {
      const user = await User.findOne({ _id });
      user.notes._id({ _id }).remove();
    }
  }
};
