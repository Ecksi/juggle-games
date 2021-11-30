import { List } from "@material-ui/core";
import Todo from "./Todo";

export default function TodoList({ todos, toggleComplete, setHighPriority, removeTodo }) {
  return (
    <List>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          setHighPriority={setHighPriority}
          removeTodo={removeTodo}
        />
      ))}
    </List>
  );
}
