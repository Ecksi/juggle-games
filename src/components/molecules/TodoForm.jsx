import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core'

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false
  });

  function generateId() {
    return Math.random().toString(36).substr(2);
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
