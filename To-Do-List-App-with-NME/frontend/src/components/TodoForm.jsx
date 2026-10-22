import { useState } from "react";

function TodoForm({
  addTodo
}) {
  const [title, setTitle] =      useState(""); 
  const [description,     setDescription] =     useState("");

  const submitHandler = (  e   ) => {     e.preventDefault();
    addTodo({       title,       description     });
    setTitle(""); 
    setDescription("");
  };

  return (
    <form       onSubmit={         submitHandler       }     >

      <input         type="text"         placeholder="Title"         value={title}
        onChange={(e) =>           setTitle(             e.target.value           )         }       />

      <input  type="text"  placeholder="Description"  value={description}
        onChange={(e) =>           setDescription(             e.target.value           )  }       />

      <button   type="submit" >   Add Task       </button>
    </form>
  );
}

export default TodoForm;