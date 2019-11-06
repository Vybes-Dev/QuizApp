module.exports = {
  server: {
    port: process.env.PORT || 3000
  },
  db: {
    host: "localhost",
    port: 27021,
    name: "CRM",
    url:
      "mongodb+srv://QuizApp:admin123456@cluster0-dapxz.mongodb.net/test?retryWrites=true&w=majority"
  }
};
