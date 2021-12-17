import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskCat from "./TaskCat";
import Fable from "../../assets/img/cats/cosmicFable.jpeg";
import Luna from "../../assets/img/cats/groovyTuna.jpeg";
import "./TaskApp.css";

const LOCAL_STORAGE_KEY = "react-task-list-tasks";

export default function TaskApp() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([tasks]);
  const [catMojis, setCatMojis] = useState([]);

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
    addCatMoji();
  }

  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
    addCatMoji();
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

  function addCatMoji() {
    setCatMojis([...catMojis, <TaskCat />]);
  }

  function destroyAllCats() {
    if (catMojis.length > 9) {
      return (
        <div className="task-destroy-kittens">
          <button onClick={explodeAllCats}>Destroy All Cats</button>
        </div>
      );
    }
  }

  function explodeAllCats() {
    alert("Are you sure you want to do this?");
    alert("Think of their cat families...");
    alert("Kittens without milk..");

    let kittensLeft = catMojis.length - 1;

    let katTimer = setInterval(() => {
      if (kittensLeft <= 0) {
        clearInterval(katTimer);
      }

      catMojis.splice(-1, 1);
      setCatMojis([...catMojis]);
    }, 500);

    return katTimer;
  }

  return (
    <div className="task-wrapper">
      {destroyAllCats()}
      <header className="task-header">
        <img alt="Fable" className="cat-pic" src={Fable} />
        <Typography style={{ padding: 16 }} variant="h2">
          Task List
        </Typography>
        <img alt="Luna" className="cat-pic" src={Luna} />
      </header>
      <TaskFilter filterTasks={filterTasks} />
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        setHighPriority={setHighPriority}
        removeTask={removeTask}
      />
      <div>
        {catMojis.map((cat) => (
          <TaskCat key={Math.random() * 100} />
        ))}
      </div>
    </div>
  );
}
