import { Fragment, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";
const defaultData = [];
if (!localStorage.getItem("todoData")) {
  localStorage.setItem("todoData", JSON.stringify(defaultData));
}
const todos = JSON.parse(localStorage.getItem("todoData"));

const Todo = () => {
  const [data, setData] = useState(todos);
  const addtodoitemHandler = (todotext) => {
    setData((prev) => [
      ...prev,
      { text: todotext, state: "none", id: Date.now() },
    ]);
  };
  const deleteItemHandler = (id) => {
    const filteredData = data.filter((elem) => elem.id !== id);
    setData(filteredData);
  };
  const saveListHandler = () => {
    localStorage.setItem("todoData", JSON.stringify(data));
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1500);
  };
  const changeStatusHandler = (id, status) => {
    const tempData = [...data];
    const changedStatusIndex = tempData.findIndex((elem) => elem.id === id);
    tempData[changedStatusIndex].state = status;
    setData(tempData);
  };
  const [showMessage, setShowMessage] = useState(false);
  return (
    <Fragment>
      {showMessage && <div className={styles.saved}>Saved</div>}
      <AddTodo addtodoitem={addtodoitemHandler}></AddTodo>
      <button className={styles["button-save"]} onClick={saveListHandler}>
        Save List
      </button>
      <TodoList
        data={data}
        deleteItem={deleteItemHandler}
        changeStatus={changeStatusHandler}
      />
    </Fragment>
  );
};
export default Todo;
