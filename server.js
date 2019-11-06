const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const config = require("./config");
const mongoose = require("mongoose");
const quizRouter = require("./routes/quiz.route");
const cors = require("cors");
const path = require("path");

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// db connection
mongoose
  .connect(config.db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to db successfully ...");
  })
  .catch(err => {
    console.log(err);
    console.log("failed to connect to db ...");
  });
server.use("/api/quiz", quizRouter);

server.use(express.static("./views"));

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "index.html"));
});
// server config and come to live
server.listen(config.server.port, () => {
  console.log("Server is listening 🔥🔥🔥");
});
