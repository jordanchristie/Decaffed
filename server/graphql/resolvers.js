const axios = require("axios");
const keys = require("../keys/keys");

const YelpSearchURL = "https://api.yelp.com/v3/businesses/search?term=cafe";

exports.resolvers = {
  Query: {
    getUser: async (parent, { _id }, { User }) => {
      const user = await User.findOne({ _id });
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
      console.log(data);
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
    addUser: async (parent, { _id, name, profileImg }, { User }) => {
      const existingUser = await User.findOne({ _id });
      if (existingUser) return existingUser;
      const user = await new User({
        _id,
        name,
        profileImg
      });
      return user;
    },

    removeUser: async (parent, { _id }, { User }) => {
      return await User.findOneAndRemove({ _id });
    },

    // FavoriteShop Mutations
    addFavoriteShop: async (
      parent,
      { _id, name, image_url, city, state },
      { User, FavoriteShop }
    ) => {
      // const user = await User.findOne({ _id });
      const favoriteShop = {
        name,
        image_url,
        city,
        state
      };
      return favoriteShop;
      // user.favoriteShops.push(favoriteShop)
    },

    // Note Mutations
    addNote: async (parent, { _id, title, note }, { User, Note }) => {
      const user = await User.findOne({ _id });
      const newNote = await new Note({ title, note });

      user.notes.push(newNote);
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
