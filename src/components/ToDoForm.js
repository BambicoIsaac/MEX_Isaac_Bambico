import React, { useState } from 'react';
import './ToDoForm.css';

const ToDoForm = ({ addTask }) => {

    const [ taskDetails, setTask ] = useState({task:"", taskType:""});
    const [priority, setPriority] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(taskDetails);
        setTask({ task: "", taskType: ""});
        setPriority('');
    }

    const handleChange = (e) => {
        setTask({...taskDetails, taskType: e.currentTarget.value});
        setPriority(e.target.value);
      }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
        <div className="todo-form-inner">
            <h2>Add Task</h2>
            <div className="todo-form-group">
                <input type="text" name="taskTitle" id="taskTitle" placeholder="Enter task to add here..."
                onChange={e => setTask({...taskDetails, task: e.currentTarget.value}) } value={taskDetails.task}/>
            </div>
            <div className="todo-form-radio">
                <input type="radio" checked={priority === 'Priority'} name="taskTypePriority" id="priority" 
                onChange={handleChange} value={"Priority"}/> 
                <label htmlFor="priority"> Mark as Priority </label>

                <br></br>

                <input type="radio" checked={priority === 'Normal'} name="taskTypeNormal" id="normal" 
                onChange={handleChange} value={"Normal"}/> 
                <label htmlFor="normal"> Mark as Normal </label>
                <br></br>
            </div>
            <div className="centered">
                <button id="add-task-button">Add Task</button>
                
            </div>
        </div>
    </form>


    )};

export default ToDoForm;