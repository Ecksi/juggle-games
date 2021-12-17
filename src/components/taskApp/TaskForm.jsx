import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    id: "",
    task: "",
    status: "incomplete",
    completed: false,
  });

  function generateId() {
    return uuidv4();
  }

  function handleInputChange(e) {
    setTask({ ...task, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (task.task.trim()) {
      addTask({
        ...task,
        id: generateId(),
      });
      // reset task input
      setTask({ ...task, task: "" });
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        name="task"
        type="text"
        value={task.task}
        onChange={handleInputChange}
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
}
