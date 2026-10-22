const ToDoListAPI = require("../models/todoModel");

const getAllToDoListAPIs = async (search) => {
   console.log("Model Collection:",
    ToDoListAPI.collection.name
  );
  const filter = search
    ? {
        title: {
          $regex: search,
          $options: "i"
        }
      }
    : {};

  return await ToDoListAPI.find(filter);
   console.log("Records Found:", data.length);

  return data;
};

const getToDoListAPIById = async (id) => {
  return await ToDoListAPI.findById(id);
};

const createToDoListAPI = async (todoData) => {
  return await ToDoListAPI.create(todoData);
};

const updateToDoListAPI = async (id, data) => {
  return await ToDoListAPI.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true
    }
  );
};

const deleteToDoListAPI = async (id) => {
  return await ToDoListAPI.findByIdAndDelete(id);
};

module.exports = {
  getAllToDoListAPIs,
  getToDoListAPIById,
  createToDoListAPI,
  updateToDoListAPI,
  deleteToDoListAPI
};