var routerUser = require("express").Router();
var routerArticle = require("express").Router();

const users = require("./controllers/user.controller");
const articles = require("./controllers/article.controller");
const comments = require("./controllers/comment.controller");

module.exports = (app) => {
    // Middlewares to handle incomming requests
    function requiresLogin(req, res, next) {
      if (req.session && req.session.user) {
        return next();
      } else {
        return res.json({ err: "You must be logged in to view this page" });
      }
    }

  app.use("/api/user", routerUser);
  routerUser.post("/signup", users.create);
  routerUser.post("/login", users.login);
  routerUser.post("/logout", requiresLogin, users.logout);

  app.use("/api/article", routerArticle);
  routerArticle.get("/listArticle", articles.getArticles);
  routerArticle.post("/create", requiresLogin, articles.createArticle);
  routerArticle.get("/detailArticle/:id", articles.getArticle);
  routerArticle.post("/:id/createComment", comments.createComment);
};
