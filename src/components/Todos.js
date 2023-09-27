import React, { useEffect } from "react";
import {
  useGetTodosQuery,
  useGetTodoQuery,
  useDeleteTodoMutation,useAddTodoMutation
} from "../redux/services/api";

import { useNavigate } from "react-router-dom";

const Todos = () => {
  const navigate = useNavigate();
  const { data: todos, error, isLoading, isSuccess } = useGetTodosQuery();
  let Data = todos;

  const [deleteTodo] = useDeleteTodoMutation();
  const [addTodo] = useAddTodoMutation();

  const handleDeleteTodo = async (id) => {
    try {
      const response = await deleteTodo(id);

      console.log("Todo deleted:", response);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  if (isLoading) {
    return <h6>Loading...</h6>;
  }

  //addTodo

    
    const addTodoOne = () =>{
      addTodo({id:11,todo:"the new 2nd todo added",completed:true,userID:25});
      console.log('todo added');
    }
  

  return (
    <header>
      <h3>Todo List</h3>
      <button onClick={()=>addTodoOne()} >AddTodo</button>
      <div className="container mt-4 d-flex flex-wrap">
        {isSuccess &&
          Data.map((todo) => {
            return (
              <div
                className="card ms-2  mt-2 col-lg-2 m-1 p-4"
                style={{ width: "13rem" }}
                key={todo.id}
              >
                <h5>Todo: {todo.todo}</h5>
                <h6>TodoId: {todo.id}</h6>

                <>
                  <label>IsCompleted:</label>
                  <input type="checkbox" checked={todo.completed} />
                </>
                <button onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
                <button onClick={() => navigate(`/viewtodo/${todo.id}`)}>
                  View
                </button>
              </div>
            );
          })}
      </div>


    </header>
  );
};

export default Todos;
