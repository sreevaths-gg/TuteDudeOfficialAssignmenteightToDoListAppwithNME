function TodoList({   todos,  deleteTodo,   updateStatus }) {
  return (
    <>
      {todos.map(
        (todo) => (
          <div key={ todo._id } > <h3>  {todo.title} </h3>

            <p>  {   todo.description  }   </p>

            <p>   <p>Status: {todo.status}</p> </p>
<div className="actions">
 <button onClick={() => updateStatus(todo._id)}  >Complete </button>

 <button  onClick={() => deleteTodo(todo._id)}>Delete</button>
</div>
          </div>
        )
      )}
    </>
  );
}

export default TodoList;