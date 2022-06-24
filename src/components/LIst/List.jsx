import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../context/todoContext";

const List = () => {
  const { getTodos, todos, deleteTodo } = useContext(todoContext);
  const navigate = useNavigate();
  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}>
      {todos.map(item => (
        <div key={item.id}>
          {item.todo}
          <Button onClick={() => deleteTodo(item.id)}>Delete</Button>
          <Button onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
        </div>
      ))}
    </div>
  );
};

export default List;
