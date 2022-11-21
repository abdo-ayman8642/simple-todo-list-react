import "./Todo-list-item.css";
import { BsCheckLg, BsXLg, BsTrash } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { useRef, useState } from "react";

const TodoItem = (props) => {
  const liRef = useRef();
  const [status, setStatus] = useState(props.status || "none");
  const checkedHandler = () => {
    setStatus("checked");
  };
  const pendingHandler = () => {
    setStatus("pending");
  };
  const cancelledHandler = () => {
    setStatus("cancelled");
  };
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li key={props.id} ref={liRef}>
      <div className={`todo-text ${status}`}>{props.text}</div>
      <button>
        <BsCheckLg onClick={checkedHandler} style={{ color: "green" }} />
      </button>
      <button>
        <MdPendingActions
          onClick={pendingHandler}
          style={{ color: "orange" }}
        />
      </button>
      <button>
        <BsXLg onClick={cancelledHandler} style={{ color: "red" }} />
      </button>
      <button>
        <BsTrash onClick={deleteHandler} style={{ color: "black" }} />
      </button>
    </li>
  );
};
export default TodoItem;
