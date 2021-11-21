import React from 'react';
import { List } from '@material-ui/core';
import Todo from './Todo';

export default function TodoList({ todos }) {
  return (
    <List>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} /> 
      ))}
    </List>
  )
};
