import React, { useState } from "react";
import styles from "../Todo-App/Todo.module.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    console.log(inputValue);
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    } else {
      alert("Please enter a valid task.");
    }
  };

  const deleteTask = (i) => {
    const updatedTasks = tasks.filter((e, index) => index !== i);
    setTasks(updatedTasks);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  const editTask = (i) => {
    const newText = prompt("Enter updated value:");
    if (newText && newText.trim() !== "") {
      const updatedTasks = tasks.map((e, index) => (index === i ? newText : e));
      setTasks(updatedTasks);
    } else {
      alert("Please enter a valid task.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your Task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={deleteAllTasks}>Delete All</button>
      </div>
      <ol>
        {tasks.map((e, i) => (
          <li key={i}>
            {e}
            <button onClick={() => deleteTask(i)}>Delete</button>
            <button onClick={() => editTask(i)}>Edit</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoApp;
