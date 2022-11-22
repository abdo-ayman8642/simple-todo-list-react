import styles from "./Todo-list-item.module.css";
import { BsCheckLg, BsXLg, BsTrash } from "react-icons/bs";
import { MdPendingActions } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const TodoItem = (props) => {
  const liRef = useRef();
  const [status, setStatus] = useState(props.status || "none");
  useEffect(() => {
    props.onChangeStatus(props.id, status);
    return () => {};
  }, [status]);
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
      <button onClick={checkedHandler}>
        <BsCheckLg style={{ color: "green" }} />
      </button>
      <button onClick={pendingHandler}>
        <MdPendingActions
          style={{ color: "orange", transform: "scale(1.2)" }}
        />
      </button>
      <button onClick={cancelledHandler}>
        <BsXLg style={{ color: "red" }} />
      </button>
      <button onClick={deleteHandler}>
        <BsTrash style={{ color: "black" }} />
      </button>
    </li>
  );
};
export default TodoItem;
