const mongoose = require("mongoose"),
  { Schema } = mongoose,
  bcrypt = require("bcrypt"),
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

UserSchema.pre("save", function(next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("user", UserSchema);
