import React from 'react';
import './ToDo.css';

const ToDo = ({todo, handleToggle, removeTask}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    const handleRemove = (e) => {
        e.preventDefault()
        removeTask(e.currentTarget.id)
    }

    return (
        
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className={(todo.priority ? "priority" : "todo")}>
            <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} className={(todo.complete ? "strike" : "")}>
                {todo.task}
                <div id="buttons">
                    <button className="todo-buttons" id={todo.id} name="todo-done" onClick={handleClick}>✔️</button>
                    <button className="todo-buttons" id={todo.id} name="todo-delete" onClick={handleRemove}>❌</button>
                </div>
            </div>
        </div>
    );
};

export default ToDo;