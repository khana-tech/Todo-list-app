import TodoItem from "./TodoItem";
import styles from "./Todolist.module.css";
export default function Todolist({ todos, settodos }) {
  const sortedTodos =todos.slice().sort((a,b)=>Number(a.done) - Number(b.done))
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem key={item.name} item={item} todos={todos} settodos={settodos}/>
      ))}
    </div>
  );
}
