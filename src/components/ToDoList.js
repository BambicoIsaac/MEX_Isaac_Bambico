import React from 'react';
import ToDo from './ToDo';
import './ToDoList.css';

const ToDoList = ({toDoList, handleToggle, handleFilter, removeTask, countDone}) => {
    return (
        <div>
            <h1 id="todolist">To Do List</h1>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} removeTask={removeTask} countDone={countDone}/>
                )
            })}
        </div>
    );
};

export default ToDoList;