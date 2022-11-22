import TodoItem from "./Todo-list-item";
import "./TodoList.module.css";

const TodoList = (props) => {
  const onDeleteHandler = (data) => {
    props.deleteItem(data);
  };
  const onChangeStatusHandler = (id, state) => {
    props.changeStatus(id, state);
  };
  const onAdjustingstatusHandler = (condition) => {
    props.onAdjustingstatus(condition);
  };
  return (
    <ul>
      {props.data.map((todo) => (
        <TodoItem
          text={todo.text}
          status={todo.state}
          id={todo.id}
          onDelete={onDeleteHandler}
          onChangeStatus={onChangeStatusHandler}
          key={todo.id}
          onAdjustingstatus={onAdjustingstatusHandler}
        />
      ))}
    </ul>
  );
};
export default TodoList;
