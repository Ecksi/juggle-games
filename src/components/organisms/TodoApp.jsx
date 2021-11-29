import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import TodoFilter from "../atoms/TodoFilter";
import TodoForm from "../molecules/TodoForm";
import TodoList from "../atoms/TodoList";
import Fable from "../../assets/catPictures/cosmicFable.jpeg";
import Luna from "../../assets/catPictures/groovyTuna.jpeg";
import "./TodoApp.css";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([todos])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    filterTodos()
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: 'complete',
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  }

  function setHighPriority(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: `${todo.status === 'high-priority' ? 'incomplete' : 'high-priority'}`
          };
        } else {
          return todo;
        }
      })
    )
  }

  function filterTodos(status='all') {
    if (status === "all") {
      setFilteredTodos(todos)
    } else {
      setFilteredTodos(todos.filter((todo) => todo.status === status))
    }
  }

  return (
    <div className="todo-wrapper">
      <header className="todo-header">
        <img alt="Fable" className="cat-pic" src={Fable} />
        <Typography style={{ padding: 16 }} variant="h2">
          Task List
        </Typography>
        <img alt="Luna" className="cat-pic" src={Luna} />
      </header>
      <TodoFilter filterTodos={filterTodos} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleComplete={toggleComplete}
        setHighPriority={setHighPriority}
        removeTodo={removeTodo}
      />
    </div>
  );
}
