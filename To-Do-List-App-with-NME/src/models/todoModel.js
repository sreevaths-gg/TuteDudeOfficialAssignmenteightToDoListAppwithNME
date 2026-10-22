const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"]
    },

    description: {
      type: String,
      default: ""
    },

    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending"
    }
  },
  {
    timestamps: true
  }
);

//module.exports = mongoose.model("toDoListApi", todoSchema);

module.exports = mongoose.model(    "ToDoListAPI",   todoSchema,
  "toDoListApi"
);