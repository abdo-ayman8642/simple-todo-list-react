import { useRef } from "react";
import { IoAdd } from "react-icons/io5";
import "./AddTodo.css";
const AddTodo = (props) => {
  const inputRef = useRef();
  const addTodo = () => {
    props.addtodoitem(inputRef.current.value);
  };
  return (
    <div className="addtodocont">
      <input type={Text} ref={inputRef}></input>
      <button className="inpButt" onClick={addTodo}>
        <IoAdd style={{ fontSize: "2.5rem" }} />
      </button>
    </div>
  );
};
export default AddTodo;
