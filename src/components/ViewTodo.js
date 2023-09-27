import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetTodosQuery,
  useGetTodoQuery,
  useDeleteTodoMutation,
} from "../redux/services/api";

const ViewTodo = () => {
  // const { data: todos } = useGetTodosQuery();

  const params = useParams();
  const { data, error, isLoading, isSuccess } = useGetTodoQuery(params.id);
  // console.log(data);
  const [deleteTodo] = useDeleteTodoMutation();

  let content;
  const handleDeleteTodo = async (id) => {
    try {
      const response = await deleteTodo(id);

      console.log("Todo deleted:", response);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  if (isLoading) {
    content = <h3>Loading...</h3>;
  }

  if (isSuccess) {
    return (content = (
      <div
        className="card ms-2  mt-2 col-lg-2 m-1 p-4"
        style={{ width: "13rem" }}
        key={data.id}
      >
        <h3>Todo List</h3>
        <h5>Todo: {data.todo}</h5>
        <h6>TodoId: {data.id}</h6>

        <>
          <label>IsCompleted:</label>
          <input type="checkbox" checked={data.completed} />
        </>
        <button onClick={() => handleDeleteTodo(data.id)}>Delete</button>
      </div>
    ));
  }

  return (
    <div className="d-flex vh-100 justify-content-center align-item-center">
      {" "}
      {content}
    </div>
  );
};

export default ViewTodo;
