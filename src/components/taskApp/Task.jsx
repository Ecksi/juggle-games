import React from "react";
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import { Delete, PriorityHigh } from "@material-ui/icons";

export default function Task({
  task,
  toggleComplete,
  removeTask,
  setHighPriority,
}) {
  function handleRemove() {
    removeTask(task.id);
  }

  function handleCheckboxClick() {
    toggleComplete(task.id);
  }

  function handlePriority() {
    setHighPriority(task.id);
  }

  return (
    <ListItem style={{ display: "flex", padding: 0 }}>
      <Checkbox checked={task.completed} onClick={handleCheckboxClick} />
      <Typography
        variant="body1"
        style={{
          textDecoration: task.completed ? "line-through" : null,
          width: 250,
        }}
      >
        {task.task}
      </Typography>
      <IconButton disabled={task.completed} onClick={handlePriority}>
        <PriorityHigh
          style={{
            color: task.status === "high-priority" ? "red" : null,
          }}
        />
      </IconButton>
      <IconButton onClick={handleRemove}>
        <Delete />
      </IconButton>
    </ListItem>
  );
}
