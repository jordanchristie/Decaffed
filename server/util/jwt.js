const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../keys/keys");

exports.verifyToken = async (req, res, next) => {
  const token = await req.headers("Authorization");
  if (token !== null) {
    try {
      const user = jwt.verify(token, tokenSecret);

      req.user = user;
    } catch (err) {
      console.error(err);
    }
  }
  next();
};

exports.createToken = (user, secret, expiresIn) => {
  const { username, email } = user;

  return jwt.sign({ username, email }, secret, { expiresIn });
};
