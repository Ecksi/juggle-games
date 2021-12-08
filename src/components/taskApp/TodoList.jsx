import { List } from "@material-ui/core";
import Todo from "./Todo";

export default function TodoList({
  todos,
  toggleComplete,
  setHighPriority,
  removeTodo,
}) {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          // TODO: Replace Math.randoms w/ better key generation. Was having an issue w/ duplicate keys using uuid
          key={Math.random() * 1000}
          todo={todo}
          toggleComplete={toggleComplete}
          setHighPriority={setHighPriority}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}
