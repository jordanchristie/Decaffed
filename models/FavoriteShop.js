const mongoose = require('mongoose'),
      { Schema } = mongoose;

const FavoriteShopSchema = new Schema({
      name: String,
      image_url: String,
      address: {
            street: Number,
            city: Number
      }
});

module.exports = FavoriteShopSchema;