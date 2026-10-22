import axios from "axios";

const API_URL =
  "http://localhost:5000/api/toDoListApi";

export const getTodos = () =>
  axios.get(API_URL);

export const createTodo = (todo) =>
  axios.post(API_URL, todo);

export const deleteTodo = (id) =>
  axios.delete(`${API_URL}/${id}`);

export const updateStatus = (
  id,
  status
) =>
  axios.patch(
    `${API_URL}/${id}/status`,
    { status }
  );

export const searchTodos = (
  keyword
) =>
  axios.get(
    `${API_URL}?search=${keyword}`
  );