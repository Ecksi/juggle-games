import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import { Delete, PriorityHigh } from "@material-ui/icons";

export default function Todo({ todo, toggleComplete, removeTodo, setHighPriority }) {
  function handleRemove() {
    removeTodo(todo.id);
  }

  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handlePriority() {
    setHighPriority(todo.id);
  }

  return (
    <ListItem style={{ display: "flex", padding: 0 }}>
      <Checkbox
        checked={todo.completed}
        onClick={handleCheckboxClick}
      />
      <Typography
        variant="body1"
        style={{
          textDecoration: (todo.completed ? "line-through" : null),
          width: 250
        }}
      >
        {todo.task}
      </Typography>
      <IconButton disabled={todo.completed}>
        <PriorityHigh
          onClick={handlePriority} 
          style={{
            color: todo.status === 'high-priority' ? 'red' : null,
          }}
        />
      </IconButton>
      <IconButton>
        <Delete onClick={handleRemove} />
      </IconButton>
    </ListItem>
  );
}
