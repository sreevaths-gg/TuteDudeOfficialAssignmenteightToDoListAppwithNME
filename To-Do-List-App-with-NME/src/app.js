const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todoRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Todo API Running");
});

app.use("/api/toDoListApi", todoRoutes);

app.use(errorHandler);

module.exports = app;