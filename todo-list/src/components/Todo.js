import { Fragment, useContext } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";
import TodoContext from "../store/TodoContext";

const Todo = () => {
  const ctx = useContext(TodoContext);

  return (
    <Fragment>
      {ctx.showMessage && <div className={styles.saved}>Saved</div>}
      <AddTodo></AddTodo>
      <TodoList data={ctx.data} />
    </Fragment>
  );
};
export default Todo;
