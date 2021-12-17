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
      {tasks.map((task) => (
        <Task
          //TODO: Replace Math.randoms w/ better key generation. Was having an issue w/ duplicate keys using uuid
          key={Math.random() * 1000}
          task={task}
          toggleComplete={toggleComplete}
          setHighPriority={setHighPriority}
          removeTask={removeTask}
        />
      ))}
    </List>
  );
}
