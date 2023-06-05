import TodoItem from "./Todo-list-item";
import "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <ul>
      {props.data.map((todo) => (
        <TodoItem
          text={todo.text}
          status={todo.state}
          id={todo.id}
          key={todo.id}
        />
      ))}
    </ul>
  );
};
export default TodoList;
