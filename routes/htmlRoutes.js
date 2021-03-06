const Router = require("express").Router;
const db = require("../models");

const htmlRoutes = new Router();

htmlRoutes.get("/", async (_req, res) => {
  res.render("./layouts/main");
});

htmlRoutes.get("/user/:user", async (req, res) => {
  const options = {
    where: {
      user: req.params.user
    }
  };

  const dbCurrentUser = await db.User.findOne(options);

  res.json(dbCurrentUser);
});

// Load example page and pass in an example by id

htmlRoutes.get("/scenes/:id", async (req, res) => {
  const options = {
    where: {
      id: req.params.id
    }
  };

  const dbScene = await db.Scene.findOne(options);

  res.render("index", { scenes: dbScene });
});

htmlRoutes.get("/login", async (_req, res) => {
  res.render("form");
});

// Render 404 page for any unmatched routes
// htmlRoutes.get("*", async (_req, res) => {
//   res.render("404");
// });

module.exports = htmlRoutes;
