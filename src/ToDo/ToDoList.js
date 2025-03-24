import React, { useState } from "react";

function ToDoList() {
  const [todo, setTodo] = useState(["Task 1", "Task 2"]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [newTask, setNewTask] = useState(""); // For storing the input value

  // Add a new task to the To-Do list
  const addTask = () => {
    if (newTask.trim()) {
      setTodo([...todo, newTask.trim()]);
      setNewTask(""); // Clear the input field
    }
  };

  // Move task from To-Do to In-Progress
  const moveToInProgress = (task) => {
    setTodo(todo.filter((t) => t !== task));
    setInProgress([...inProgress, task]);
  };

  // Move task from In-Progress to Completed
  const moveToCompleted = (task) => {
    setInProgress(inProgress.filter((t) => t !== task));
    setCompleted([...completed, task]);
  };

  return (
    <div>
      <h2>Task Manager</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Update input field
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <table border="1" style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>To-Do</th>
            <th>In Progress</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul>
                {todo.map((task, index) => (
                  <li key={index} onClick={() => moveToInProgress(task)}>
                    {task}
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {inProgress.map((task, index) => (
                  <li key={index} onClick={() => moveToCompleted(task)}>
                    {task}
                  </li>
                ))}
              </ul>
            </td>
            <td>
              <ul>
                {completed.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;

