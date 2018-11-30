const mongoose = require('mongoose'),
      { Schema } = mongoose,
      noteSchema = require('./Note'),
      favoriteShopSchema = require('./FavoriteShop');


const UserSchema = new Schema({
      name: 'string',
      notes: [noteSchema],
      favoriteShops: [favoriteShopSchema]
})

module.exports = mongoose.model('user', UserSchema);