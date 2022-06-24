import { IconButton } from "@mui/material";
import React, { useContext } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { counterContext } from "../../context/counterContext";

const Counter = () => {
  const { counter, increment, decrement } = useContext(counterContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <IconButton
        onClick={() => increment()}
        aria-label="delete"
        color="primary">
        <AddIcon />
      </IconButton>
      <span>{counter}</span>
      <IconButton
        onClick={() => decrement()}
        aria-label="delete"
        color="primary">
        <RemoveIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
