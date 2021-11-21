import React from 'react';
import { List } from '@material-ui/core';
import Todo from './Todo';

export default function TodoList({ todos, removeTodo }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} /> 
      ))}
    </List>
  )
};
