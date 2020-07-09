const Article = require("../models/article.schema");
const User = require("../models/user.schema");
const session = require("express-session");

exports.createArticle = (req, res) => {
  if (req.session.user) {
    const article = new Article(req.body);
    article.user = req.session.user._id;
    article.save().then((result) => {
      res.json({ article: result });
    });
  } else {
    res.json({ err:"Chua login!" });    
  }
};

exports.getArticles = (req, res) => {
  Article
    .find()
    .populate('comments')
    .exec((err, articles) => {
      if (err) {
        res.json({ err });
      }
      res.json({ articles: articles });
    });
};

exports.getArticle = (req, res) => {
  Article.findById(req.params.id)
    .populate("user")
    .populate("comments")
    .exec((err, article) => {
      if (err) {
        return res.json({ err });
      }
      res.json({
        title: article.title,
        content: article.content,
        user: article.user.username,
        comments: article.comments,
      });
    });
};
