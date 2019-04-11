const express = require("express"),
  Note = require("../models/Note"),
  app = express();

module.exports = app => {
  app.get("/auth/logout", (req, res) => {
    console.log("logged out!");
    req.logout();
    res.redirect("/");
  });

  app.get("/auth/test", (req, res) => {
    res.redirect("/dashboard");
  });
};
