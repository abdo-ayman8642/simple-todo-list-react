import styles from "./Todo-list-item.module.css";
import { BsCheckLg, BsXLg, BsTrash } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { useContext, useEffect, useRef, useState } from "react";
import TodoContext from "../store/TodoContext";

const TodoItem = (props) => {
  const ctx = useContext(TodoContext);
  const liRef = useRef();
  const [status, setStatus] = useState(props.status || "none");

  useEffect(() => {
    ctx.changeStatus(props.id, status);
    ctx.onAdjustingstatus(true);
    return () => {};
  }, [status]);

  const changeStatusHandler = (event) => {
    let buttonElement = event.target;
    //because we might target what inside button like svg,path
    while (!buttonElement.getAttribute("data-key")) {
      buttonElement = buttonElement.parentElement;
    }
    const status = buttonElement.getAttribute("data-key");
    setStatus(status);
  };

  const deleteHandler = () => {
    ctx.deleteItem(props.id);
  };

  return (
    <li ref={liRef}>
      {status === "pending" && (
        <div className={styles["pending-animation"]}>
          <div className={styles["lds-ellipsis"]}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      <div
        className={`${styles["todo-text"]} ${styles[status]} ${styles.opacity}`}
      >
        {props.text}
      </div>
      <button data-key={"checked"} onClick={changeStatusHandler}>
        <BsCheckLg style={{ color: "green" }} />
      </button>
      <button data-key={"pending"} onClick={changeStatusHandler}>
        <MdPendingActions
          style={{ color: "orange", transform: "scale(1.2)" }}
        />
      </button>
      <button data-key={"cancelled"} onClick={changeStatusHandler}>
        <BsXLg style={{ color: "red" }} />
      </button>
      <button onClick={deleteHandler}>
        <BsTrash style={{ color: "black" }} />
      </button>
    </li>
  );
};

export default TodoItem;
