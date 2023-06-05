import styles from "./Todo-list-item.module.css";
import { BsCheckLg, BsXLg, BsTrash } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { useRef, useState } from "react";
import { todoActions } from "../store/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const dispatch = useDispatch();
  const liRef = useRef();
  const [status, setStatus] = useState(props.status || "none");
  const changeStatusHandler = (event) => {
    let buttonElement = event.target;
    //because we might target what inside button like svg,path
    while (!buttonElement.getAttribute("data-key")) {
      buttonElement = buttonElement.parentElement;
    }
    const currStatus = buttonElement.getAttribute("data-key");

    setStatus(currStatus);

    dispatch(todoActions.changeStatus({ status: currStatus, id: props.id }));
    dispatch(todoActions.saveData());
  };

  const deleteHandler = () => {
    dispatch(todoActions.deleteItem(props.id));
    dispatch(todoActions.saveData());
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
