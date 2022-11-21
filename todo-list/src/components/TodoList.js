import TodoItem from "./Todo-list-item";
import "./TodoList.css";

const TodoList = (props) => {
  const onDeleteHandler = (data) => {
    props.deleteItem(data);
  };
  return (
    <ul>
      {props.data.map((todo) => (
        <TodoItem
          text={todo.text}
          status={todo.state}
          id={todo.id}
          onDelete={onDeleteHandler}
          key={todo.id}
        />
      ))}
    </ul>
  );
};
export default TodoList;
