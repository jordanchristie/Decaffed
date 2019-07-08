const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const { ApolloServer } = require("apollo-server-express");
const { mongoURI } = require("./keys/keys");
const { verifyToken } = require("./util/jwt");
const User = require("./models/User");
const FavoriteShop = require("./models/FavoriteShop");
const Note = require("./models/Note");
const { typeDefs } = require("./graphql/schema");
const { resolvers } = require("./graphql/resolvers");
const PORT = process.env.PORT || 5000;
const app = express();
require("./auth/passport");

// Initialize MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console));
db.once("open", () => console.log("connected to Mongo 🐵"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(verifyToken);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/userRoutes")(app);

require("./routes/routes")(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    console.log(req.currentUser);
    return {
      User,
      FavoriteShop,
      Note,
      currentUser: req.currentUser
    };
  }
});
server.applyMiddleware({ app });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT} 🚀`));
