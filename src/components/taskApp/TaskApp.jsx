import { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Fable from "../../assets/img/cats/cosmicFable.jpeg";
import Luna from "../../assets/img/cats/groovyTuna.jpeg";
import "./TaskApp.css";

const LOCAL_STORAGE_KEY = "react-task-list-tasks";

export default function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    filterTasks();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    // filterTasks is only run on pageLoad, so it is not included in the list of dependencies- eslint disable to suppress warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  function addTask(task) {
    setTasks([task, ...tasks]);
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleComplete(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: "complete",
            completed: !task.completed,
          };
        } else {
          return task;
        }
      })
    );
  }

  function setHighPriority(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            status: `${
              task.status === "high-priority" ? "incomplete" : "high-priority"
            }`,
          };
        } else {
          return task;
        }
      })
    );
  }

  function filterTasks(status = "all") {
    if (status === "all") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === status));
    }
  }


  return (
    <Box className="task-app">
      <header className="task-header">
        <img alt="Fable" className="task-cat" src={Fable} />
        <Typography style={{ padding: 16 }} variant="h2">
          Task List
        </Typography>
        <img alt="Luna" className="task-cat" src={Luna} />
      </header>
      <TaskFilter filterTasks={filterTasks} />
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        setHighPriority={setHighPriority}
        removeTask={removeTask}
      />
    </Box>
  );
}
