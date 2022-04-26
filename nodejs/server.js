const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const corsConfig = {
  origin: "*",
};

const DB_URI =
  "mongodb+srv://vishalsingh:vishalsingh123@cluster0.k51jo.mongodb.net/test-db?retryWrites=true&w=majority";

const logger = (req, res, next) => {
  console.log(req, res, Date.now());
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsConfig));
app.use(logger);

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
   })
  .then(() => console.log("db connected successfully..."))
  .catch(e => {
    console.log("db connection failed...", e);
    process.exit(1);
  });

app.use("/api/users", require("./userRouter"));

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
