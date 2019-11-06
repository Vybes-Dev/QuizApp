const quizSchema = require("../models/quiz.model").quizSchema;

module.exports = {
  getPublishedQuizzes(req, res) {
    quizSchema
      .find({ published: true })
      .then(data => res.json({ data, success: true, msg: "Done Successfully" }))
      .catch(err => res.json({ data: err, success: false, msg: err }));
  },
  getUnpublishedQuizzes(req, res) {
    quizSchema
      .find({
        $or: [
          { published: false },
          { published: null },
          { published: { $exists: false } }
        ]
      })
      .then(data => {
        res.json({ data, success: true, msg: "Done Successfully" });
      })
      .catch(err => res.json({ data: err, success: false, msg: err }));
  },
  createQuiz(req, res) {
    let quiz = new quizSchema(req.body);
    console.log(req.body);
    quiz
      .save()
      .then(data => {
        res.json({ data, success: true, msg: "Done Successfully" });
      })
      .catch(err => {
        res.json({ err, success: true, msg: "Update failed..." });
      });
  },
  editQuiz(req, res) {
    let id = req.headers.quiz;
    quizSchema
      .updateOne({ _id: id }, { $set: req.body })
      .then(data => {
        if (data.n != 0) {
          if (data.nModified != 0) {
            res.json({ data, msg: "Updated successfully...", success: true });
          } else {
            res.json({ data, msg: "Update failed...", success: false });
          }
        } else {
          res.json({ data, msg: "No such record...", success: false });
        }
      })
      .catch(err => {
        res.json({ err, success: true, msg: "Update failed..." });
      });
  }
};
