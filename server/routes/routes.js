const express = require("express"),
  Note = require("../models/Note"),
  app = express();

module.exports = app => {
  app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
