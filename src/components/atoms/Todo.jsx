import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

export default function Todo({ todo, toggleComplete, removeTodo }) {
  function handleRemove() {
    removeTodo(todo.id);
  }

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Checkbox
        checked={todo && todo.completed}
        onClick={handleCheckboxClick}
      />
      <Typography
        variant="body1"
        style={{
          textDecoration: todo && (todo.completed ? "line-through" : null),
        }}
      >
        {todo && todo.task}
      </Typography>
      <IconButton>
        <CloseIcon onClick={handleRemove} />
      </IconButton>
    </ListItem>
  );
}
