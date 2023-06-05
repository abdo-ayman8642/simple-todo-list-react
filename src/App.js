import styles from "./App.module.css";
import Todo from "./components/Todo";
function App() {
  return (
    <div className={styles.App}>
      <h1>To-Do List</h1>
      <Todo className={styles.todoApp} />
    </div>
  );
}

export default App;
