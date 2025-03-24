import React, { useState } from 'react';
import './WorkTile.css';

const WorkTile = ({ title, workList, setWorkList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [todo, setTodo] = useState(workList);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  // Move task from To-Do to In-Progress
  const moveToInProgress = (task) => {
    setTodo(todo.filter((t) => t !== task)); // Remove task from To-Do
    setInProgress([...inProgress, task]); // Add task to In-Progress
  };

  // Move task from In-Progress to Completed
  const moveToCompleted = (task) => {
    setInProgress(inProgress.filter((t) => t !== task)); // Remove task from In-Progress
    setCompleted([...completed, task]); // Add task to Completed
  };
  const handleDelete = (clickedTitle) => {
    let workListFiltered = workList.filter((item) => item !== clickedTitle);
    setWorkList(workListFiltered);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    let workListUpdated = workList.map((item) => (item === title ? newTitle : item));
    setWorkList(workListUpdated);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(title);
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  return (
    <div className='tile'>
      {/* {isEditing ? (
        <>
          <input
            type='text'
            value={newTitle}
            onChange={handleChange}
            className='tileInput'
          />
          <div className='tileButtonContainer'>
            <button onClick={handleSave} className='tileButton saveButton'>Save</button>
            <button onClick={handleCancel} className='tileButton cancelButton'>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p className='tileTitle'>{title}</p>
          <div className='tileButtonContainer'>
            <button onClick={handleEdit} className='tileButton editButton'>Edit</button>
            <button onClick={() => handleDelete(title)} className='tileButton deleteButton'>Delete</button>
          </div>
        </>
      )} */}

        <table border="1" style={{ width: "100%", textAlign: "center" }}>
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
};

export default WorkTile;