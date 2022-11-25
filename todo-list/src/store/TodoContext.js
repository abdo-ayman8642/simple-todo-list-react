import { createContext } from "react";
import { useState, useEffect } from "react";
const TodoContext = createContext({ working: "trying" });

let adjustingStatus = false;
export const TodoContextProvider = (props) => {
  if (!localStorage.getItem("todoData")) {
    localStorage.setItem("todoData", JSON.stringify([]));
  }
  const todos = JSON.parse(localStorage.getItem("todoData"));

  const [data, setData] = useState(todos);

  const onAdjustingstatus = (condition) => {
    adjustingStatus = condition;
  };
  const addtodoitem = (todotext) => {
    adjustingStatus = true;
    setData((prev) => [
      ...prev,
      { text: todotext, state: "none", id: Date.now() },
    ]);
  };

  const deleteItem = (id) => {
    adjustingStatus = true;
    const filteredData = data.filter((elem) => elem.id !== id);
    setData(filteredData);
  };

  const changeStatus = (id, status) => {
    const tempData = [...data];
    const changedStatusIndex = tempData.findIndex((elem) => elem.id === id);
    tempData[changedStatusIndex].state = status;
    setData(tempData);
  };

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
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
    <TodoContext.Provider
      value={{
        showMessage,
        todos,
        data,
        addtodoitem,
        changeStatus,
        deleteItem,
        onAdjustingstatus,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
