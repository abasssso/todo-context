import { Button, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { todoContext } from "../../context/todoContext";

const Edit = () => {
  const { id } = useParams();
  const { getOneTodo, oneTodo, updateTodo } = useContext(todoContext);
  const [todo, setTodo] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getOneTodo(id);
  }, []);
  useEffect(() => {
    if (oneTodo) {
      setTodo(oneTodo.todo);
    }
  }, [oneTodo]);
  console.log(oneTodo);
  function handleSave() {
    let editedTodo = {
      todo,
    };
    updateTodo(id, editedTodo);
    navigate("/list");
  }
  return (
    <Container display="flex">
      {oneTodo ? <Box></Box> : <h2>Loading...</h2>}
      <TextField
        value={todo}
        onChange={e => setTodo(e.target.value)}
        label="What to do?"
        variant="outlined"
      />
      <Button onClick={handleSave} variant="outlined">
        Save
      </Button>
    </Container>
  );
};

export default Edit;
