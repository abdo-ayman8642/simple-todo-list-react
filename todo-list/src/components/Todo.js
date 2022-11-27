import { Fragment } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";
import { useSelector } from "react-redux";
import { todoActions } from "../store/todoSlice";

const Todo = () => {
  const data = useSelector((state) => state.items);

  return (
    <Fragment>
      <AddTodo></AddTodo>
      <TodoList data={data} />
    </Fragment>
  );
};
export default Todo;
