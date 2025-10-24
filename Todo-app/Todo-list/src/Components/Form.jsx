import { useState } from "react";
import styles from "./Form.module.css";
export default function Form({ todos, settodos }) {
 // const [todo, settodo] = useState("");
   const [todo, settodo] = useState({name:"",done:false});

  function handleSubmit(e) {
    e.preventDefault();
    settodos([...todos, todo]);
    settodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.InputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => settodo({name:e.target.value})}
          type="text"
          value={todo.name}
          placeholder="Enter todo item"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
