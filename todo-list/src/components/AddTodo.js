import { useContext, useRef } from "react";
import { IoAdd } from "react-icons/io5";
import TodoContext from "../store/TodoContext";
import styles from "./AddTodo.module.css";
const AddTodo = () => {
  const ctx = useContext(TodoContext);
  const inputRef = useRef();
  const addTodo = () => {
    if (inputRef.current.value.trim() === "") {
      inputRef.current.value = "";
      return;
    }
    ctx.addtodoitem(inputRef.current.value);
    inputRef.current.value = "";
  };
  const addKeyboard = (e) => {
    if (e.key === "Enter") addTodo();
  };
  return (
    <div className={styles.addtodocont}>
      <input
        type={"text"}
        ref={inputRef}
        onKeyDown={addKeyboard}
        maxLength="40"
        placeholder="Add Tasks Here"
      ></input>
      <button className={styles.inpButt} onClick={addTodo}>
        <IoAdd style={{ fontSize: "2.5rem", fontWeight: "bolder" }} />
      </button>
    </div>
  );
};
export default AddTodo;
