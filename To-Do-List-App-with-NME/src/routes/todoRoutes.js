const express = require("express");

const router = express.Router();

const {
  getToDoListAPI,
  createToDoListAPI,
  updateToDoListAPI,
  updateStatus,
  deleteToDoListAPI
} = require("../controllers/todoController");

router.get("/", getToDoListAPI);

router.post("/", createToDoListAPI);

router.put("/:id", updateToDoListAPI);

router.patch(
  "/:id/status",
  updateStatus
);

router.delete("/:id", deleteToDoListAPI);

module.exports = router;