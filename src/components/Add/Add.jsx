import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { todoContext } from "../../context/todoContext";

const Add = () => {
  const navigate = useNavigate();
  const { createTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  function handleSave() {
    let newTodo = {
      todo,
    };
    createTodo(newTodo);
    navigate("/list");
    // console.log(newTodo);
  }
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <TextField
        value={todo}
        onChange={e => setTodo(e.target.value)}
        label="Filled"
        variant="filled"
      />
      <Button onClick={() => handleSave()} variant="contained">
        Add
      </Button>
    </Box>
  );
};

export default Add;
