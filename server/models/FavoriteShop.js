const mongoose = require('mongoose'),
      { Schema } = mongoose;

const FavoriteShopSchema = new Schema({
      name: {
            type: String,
            required: true
      },
      image_url: {
            type: String,
            required: true
      },
      address: {
            street: {
                  type: String,
                  required: true
            },
            city: {
                  type: String,
                  required: true
            }
      }
});

module.exports = FavoriteShopSchema;