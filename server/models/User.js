const mongoose = require("mongoose"),
  { Schema } = mongoose,
  noteSchema = require("./Note"),
  favoriteShopSchema = require("./FavoriteShop");

const UserSchema = new Schema({
  username: String,
  email: String,
  password: String,
  profileImg: String,
  notes: [noteSchema],
  favoriteShops: [favoriteShopSchema]
});

module.exports = mongoose.model("user", UserSchema);
