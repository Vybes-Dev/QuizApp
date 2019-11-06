const mongoose = require("mongoose");
const autoPopulate = require("mongoose-autopopulate");

const questionSchema = new mongoose.Schema({
  question: {
    type: String
  },
  answers: [
    {
      answer: String,
      id: String
    }
  ],
  correctAnswerId: String,
  explanation: String
});

const quizSchema = new mongoose.Schema({
  name: {
    type: String
  },
  questions: [questionSchema],
  published: {
    type: Boolean,
    default: false
  },
  publishDate: {
    type: Date
  },
  creationDate: {
    type: Date,
    default: Date.now()
  }
});

quizSchema.plugin(autoPopulate);
module.exports = {
  quizSchema: mongoose.model("quiz", quizSchema),
  questionSchema
};
