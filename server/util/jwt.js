const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../keys/keys");

exports.verifyToken = async (req, res, next) => {
  const bearerHeader = await req.headers["authorization"];
  if (bearerHeader !== undefined) {
    try {
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];

      const user = await jwt.verify(token, tokenSecret);

      req.currentUser = user;
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
