import { useRef } from "react";
import { IoAdd } from "react-icons/io5";
import styles from "./AddTodo.module.css";
const AddTodo = (props) => {
  const inputRef = useRef();
  const addTodo = () => {
    if (inputRef.current.value.trim() === "") {
      inputRef.current.value = "";
      return;
    }
    props.addtodoitem(inputRef.current.value);
    inputRef.current.value = "";
  };
  const addKeyboard = (e) => {
    if (e.key === "Enter") addTodo();
  };
  return (
    <div className={styles.addtodocont}>
      <input
        type={Text}
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
