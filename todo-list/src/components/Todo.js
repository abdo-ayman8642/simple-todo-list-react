import { Fragment, useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import styles from "./Todo.module.css";

const defaultData = [];
let adjustingStatus = false;

if (!localStorage.getItem("todoData")) {
  localStorage.setItem("todoData", JSON.stringify(defaultData));
}
const todos = JSON.parse(localStorage.getItem("todoData"));

const Todo = () => {
  const [data, setData] = useState(todos);

  const onAdjustingstatusHandler = (condition) => {
    adjustingStatus = condition;
  };
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

  const changeStatusHandler = (id, status) => {
    const tempData = [...data];
    const changedStatusIndex = tempData.findIndex((elem) => elem.id === id);
    tempData[changedStatusIndex].state = status;
    setData(tempData);
  };

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    console.log(adjustingStatus);
    if (adjustingStatus) {
      localStorage.setItem("todoData", JSON.stringify(data));
      setShowMessage(true);
      const savedTimer = setTimeout(() => {
        setShowMessage(false);
      }, 1000);
      return () => {
        clearTimeout(savedTimer);
      };
    }
  }, [data]);

  return (
    <Fragment>
      {showMessage && <div className={styles.saved}>Saved</div>}
      <AddTodo addtodoitem={addtodoitemHandler}></AddTodo>
      <TodoList
        data={data}
        deleteItem={deleteItemHandler}
        changeStatus={changeStatusHandler}
        onAdjustingstatus={onAdjustingstatusHandler}
      />
    </Fragment>
  );
};
export default Todo;
