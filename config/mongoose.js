const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

const url =
  "mongodb+srv://akshayvj28:Za6qZE34eVx0XNGa@cluster0.0m7biwu.mongodb.net/hospital_API";
// ****** Database Connection with Mongoose ****** //
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// ****** Connection Error Handling ****** //
db.on("error", console.error.bind(console, "Error connecting to the databse"));

// ****** Connection Error Successful ****** //
db.once("open", function () {
  console.log("Successfully connected to the Database");
});
