const mongoose = require('mongoose'),
      { Schema } = mongoose;

const FavoriteShopSchema = new Schema({
    
});

module.exports = mongoose.model('favoriteShop', FavoriteShopSchema);