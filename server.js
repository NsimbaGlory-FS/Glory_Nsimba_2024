const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

const movieRouter = require("./routes/movies");

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connection Established"));

app.use(express.json());

app.use("/movies", movieRouter);

app.listen(PORT, () => {
  console.log(`Server runing on ${PORT}`);
});
