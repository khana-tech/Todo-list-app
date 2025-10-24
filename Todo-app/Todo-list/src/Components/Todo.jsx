import { useState } from "react";
import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./footer";

export default function Todo() {
  const [todos, settodos] = useState([]);
  const completedTodos = todos.filter((Todo)=>Todo.done).length
  const totalTodos = todos.length
  return (
    <div>
      <Form todos={todos} settodos={settodos} />
      <Todolist todos={todos} settodos={settodos} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos}/>
    </div>
  );
}
