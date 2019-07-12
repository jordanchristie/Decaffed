const mongoose = require("mongoose"),
  { Schema } = mongoose;

const FavoriteShopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: true
  },
  cityState: {
    type: String,
    required: true
  }
});

module.exports = FavoriteShopSchema;
