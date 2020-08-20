const axios = require("axios");
const bcrypt = require("bcrypt");
const keys = require("../keys/keys");
const { createToken } = require("../util/jwt");

exports.resolvers = {
  Query: {
    getUser: async (parent, args, { User, currentUser }) => {
      if (!currentUser) return null;
      const user = await User.findOne({ username: currentUser.username });

      return user;
    },

    getCoffeeShops: async (parent, { coordinates }) => {
      const YelpSearchURL = "https://api.yelp.com/v3/graphql/businesses/search";

      const result = await axios.get(`${YelpSearchURL}`, {
        headers: {
          Authorization: `Bearer ${keys.YelpAPIKey}`,
        },
        params: {
          term: "cafe",
          latitude: coordinates.lat,
          longitude: coordinates.lng,
        },
      });

      console.log(result.data);

      // const { data } = await result;
      // console.log(data);

      // return data;

      // const normalizedData = data.map(
      //   ({
      //     name,
      //     image_url,
      //     location,
      //     coordinates,
      //     rating,
      //     display_phone,
      //   }) => ({
      //     name,
      //     image_url,
      //     rating,
      //     phone: display_phone,
      //     address: location.address1,
      //     cityState: `${location.city}, ${location.state} ${location.zip_code}`,
      //     coordinates: {
      //       lat: coordinates.latitude,
      //       lng: coordinates.longitude,
      //     },
      //   })
      // );
      // return normalizedData;
    },

    getAllNotes: async (parent, { _id }, { User }) => {
      const user = await User.findOne({ _id });
      return user.notes;
    },

    getAllFavoriteShops: async (parent, { _id }, { User }) => {
      const user = await User.findOne({ _id });
      return user.favoriteShops;
    },
  },
  Mutation: {
    // User Mutations
    signUpUser: async (parent, { username, email, password }, { User }) => {
      const existingUser = await User.findOne();
      if (existingUser) throw new Error("User already exists");
      const newUser = await new User({
        username,
        email,
        password,
      }).save();

      return {
        token: createToken(newUser, keys.tokenSecret, "1d"),
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
        token: createToken(user, keys.tokenSecret, "1d"),
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
        cityState,
      };
      user.favoriteShops.push(favoriteShop);
      user.save();
    },

    removeFavoriteShop: async (parent, { _id }, { User, currentUser }) => {
      const user = await User.findOne({ username: currentUser.username });

      user.favoriteShops.id(_id).remove();

      user.save();

      return user.favoriteShops;
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
        location,
      };

      user.notes.push(newNote);
      user.save();
    },

    editNote: async (parent, { _id }, { User, Note }) => {
      const user = await User.findOne({ _id });
      const modifiedNote = await Note.findOneAndUpdate({ _id });
    },

    deleteNote: async (parent, { _id }, { User, currentUser }) => {
      const user = await User.findOne({ username: currentUser.username });
      user.notes.id({ _id }).remove();

      user.save();

      return user.notes;
    },
  },
};
