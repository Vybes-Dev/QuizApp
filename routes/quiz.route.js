const express = require("express");
const quizRouter = express.Router();
const quizCtrl = require("../controllers/quiz.ctrl");

quizRouter.get("/published", quizCtrl.getPublishedQuizzes);

quizRouter
  .route("/")
  .get(quizCtrl.getUnpublishedQuizzes)
  .post(quizCtrl.createQuiz)
  .put(quizCtrl.editQuiz);

module.exports = quizRouter;
