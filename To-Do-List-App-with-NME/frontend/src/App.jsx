import { useState,
useEffect } from "react";

import TodoForm from "./components/TodoForm.jsx";
import TodoList from "./components/TodoList.jsx";
import SearchBar from "./components/SearchBar.jsx";

import {
  getTodos,  createTodo,   deleteTodo,   updateStatus,   searchTodos } from "./services/todoService";

function App() {   const [todos, setTodos] =     useState([]);

  const [search,     setSearch] =     useState("");

  useEffect(() => {     fetchTodos();   }, []);

  const fetchTodos =
    async () => {
      const res =
        await getTodos();

      setTodos(  res.data );
    };

  const addTodo =
    async (todo) => {       await createTodo( todo );
      fetchTodos();
    };

  const removeTodo =
    async (id) => {       await deleteTodo( id      );
      fetchTodos();
    };

  const changeStatus =     async (id) => {       await updateStatus( id,"completed" );
      fetchTodos();
    };

  useEffect(() => {
    const fetchSearch =
      async () => {        if (search === "") {fetchTodos();return;        }
        const res = await searchTodos(search);
        setTodos( res.data );
      };

    fetchSearch();
  }, [search]);

  return (
    <div>
      <h3> To-Do List APIs with <br/>Node.js, Express.js, and MongoDB      </h3>

      <SearchBar  search={search}  setSearch={ setSearch      }       />

      <TodoForm         addTodo={           addTodo         }       />

      <TodoList todos={todos}   deleteTodo={removeTodo }   updateStatus={changeStatus}       />
    </div>
  );
}

export default App;