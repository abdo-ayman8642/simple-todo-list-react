import { Fragment } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todoSlice";

const Todo = () => {
  const showMessage = useSelector((state) => state.showMessage);
  const data = useSelector((state) => state.items);
  const dispatch = useDispatch();

  if (showMessage === true) {
    setTimeout(() => {
      dispatch(todoActions.reset());
    }, 650);
  }
  return (
    <Fragment>
      {showMessage && (
        <div className={styles.saved}>
          <div className={styles["lds-ring"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <span>Loading</span>
        </div>
      )}
      <AddTodo></AddTodo>
      <TodoList data={data} />
    </Fragment>
  );
};
export default Todo;
