import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core'
import {v4 as uuidv4} from "uuid"

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  });

  function generateId() {
    return uuidv4();
  }

  function handleInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({
        ...todo,
        id: generateId(),
      })
      // reset task input
      setTodo({ ...todo, task: ''})
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}> 
      <TextField
        label="Task"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleInputChange}
      />
      <Button type="submit">Add Task</Button>
    </form>
  )
}
