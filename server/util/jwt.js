const jwt = require("jsonwebtoken");
const { tokenSecret } = require("../keys/keys");

exports.verifyToken = async (req, res, next) => {
  const token = await req.headers["authorization"];
  if (token !== null) {
    try {
      const user = await jwt.verify(token, tokenSecret);

      req.currentUser = user;
    } catch (err) {
      console.error("Something went wrong");
    }
  }
  next();
};

exports.createToken = (user, secret, expiresIn) => {
  const { username, email } = user;

  return jwt.sign({ username, email }, secret, { expiresIn });
};
