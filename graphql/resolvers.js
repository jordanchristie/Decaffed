exports.resolvers = {
  Query: {
    getUser: (parent, { _id }, { User }) => {
      const user = User.findOne({ _id });
      console.log(user)
      return user;
    },
  },
  Mutation: {
    // User Mutations
    addUser: async (parent, { _id, name, image_url }, { User }) => {
      const existingUser =  await User.findOne({ _id })
      if (existingUser) return existingUser;
      const user = await new User({
        name,
        image_url
      })
      return user;
    },

    removeUser: async (parent, { _id }, { User }) => {
      return await User.findOneAndRemove({ _id })
    },

    // FavoriteShop Mutations
    addFavoriteShop: async (parent, { _id, name, image_url, address }, { User, FavoriteShop}) => {
      const user = await User.findOne({ _id });
      const favoriteShop = new FavoriteShop({
        name,
        image_url,
        address
      })
      user.favoriteShops.push(favoriteShop)
    },

    // Note Mutations
    addNote: async (parent, { _id, title, note }, { User, Note }) => {
      const user = await User.findOne({ _id });
      const newNote = await new Note({ title, note })

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

}


