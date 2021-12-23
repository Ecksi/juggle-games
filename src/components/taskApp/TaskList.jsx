import { List } from "@material-ui/core";
import Task from "./Task";

export default function TaskList({
  tasks,
  toggleComplete,
  setHighPriority,
  removeTask,
}) {
  return (
    <List>
      {tasks.map((task, i) => (
        <Task
          key={i}
          task={task}
          toggleComplete={toggleComplete}
          setHighPriority={setHighPriority}
          removeTask={removeTask}
        />
      ))}
    </List>
  );
}
