import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TodoForm from '../molecules/TodoForm';
import TodoList from '../atoms/TodoList';

const LOCAL_STORAGE_KEY = 'react-todo-list-todos';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos])
  };

  return (
    <React.Fragment>
      <Typography style={{ padding: 16 }} variant="h1">Task List</Typography>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </React.Fragment>
  )
};
