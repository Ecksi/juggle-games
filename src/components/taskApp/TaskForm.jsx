import { useState } from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
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
      <FormControl>
        <TextField
          label="Task"
          name="task"
          type="text"
          color="red"
          value={task.task}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained">Add Task</Button>
      </FormControl>
    </form>
  );
}
