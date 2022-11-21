import { Fragment, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
const todos = [];
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
  return (
    <Fragment>
      <AddTodo addtodoitem={addtodoitemHandler}></AddTodo>
      <TodoList data={data} deleteItem={deleteItemHandler} />
    </Fragment>
  );
};
export default Todo;
