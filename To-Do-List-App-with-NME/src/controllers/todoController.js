const todoService = require("../services/todoService");

const getToDoListAPI = async (req, res, next) => {
  try {
    const search = req.query.search;

    const toDoListAPI =
      await todoService.getAllToDoListAPIs(search);

    res.status(200).json(toDoListAPI);
  } catch (error) {
    next(error);
  }
};

const createToDoListAPI = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required"
      });
    }

    const todo =
      await todoService.createToDoListAPI({
        title,
        description
      });

    res.status(201).json({
      success: true,
      data: todo
    });
  } catch (error) {
    next(error);
  }
};

const updateToDoListAPI = async (req, res, next) => {
  try {
    const todo =
      await todoService.updateToDoListAPI(
        req.params.id,
        req.body
      );

    if (!todo) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const { status } = req.body;

    if (
      status !== "pending" &&
      status !== "completed"
    ) {
      return res.status(400).json({
        message: "Invalid Status"
      });
    }

    const todo =
      await todoService.updateToDoListAPI(
        req.params.id,
        { status }
      );

    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

const deleteToDoListAPI = async (req, res, next) => {
  try {
    const todo =
      await todoService.deleteToDoListAPI(
        req.params.id
      );

    if (!todo) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task Deleted Successfully"
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getToDoListAPI,
  createToDoListAPI,
  updateToDoListAPI,
  updateStatus,
  deleteToDoListAPI
};