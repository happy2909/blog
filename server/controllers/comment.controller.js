const Comment = require("../models/comment.schema");
const Article = require("../models/article.schema");

exports.createComment = (req, res) => {
  const articleId = req.params.id;
  const comment = new Comment(req.body);

  Comment.create(comment).then((savedComment) => {
    Article.findByIdAndUpdate(
      articleId,
      { $push: { comments: savedComment } },
      { safe: true, upsert: true, new: false, useFindAndModify: false },
      function (err, result) {
        if (err) {
          res.send(err);
        } else {
          res.json({ comment: savedComment });
        }
      }
    );
  });
};
