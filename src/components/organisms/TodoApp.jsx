import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import TodoForm from "../molecules/TodoForm";
import TodoList from "../atoms/TodoList";
import Fable from "../../assets/catPictures/cosmicFable.jpeg";
import Luna from "../../assets/catPictures/groovyTuna.jpeg";
import "./TodoApp.css";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

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
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="todo-wrapper">
      <header className="todo-header">
        <img alt="fable" className="cat-pic" src={Fable} />
        <Typography style={{ padding: 16 }} variant="h2">
          Task List
        </Typography>
        <img alt="luna" className="cat-pic" src={Luna} />
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}
