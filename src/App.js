import React, { useState } from 'react';
import LoginForm from "./components/LoginForm";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

//Mock Data
import data from "./data.json";


function App() {
  const adminUser = {
    username: "admin",
    password: "admin1234"
  }

  const [user, setUser] = useState({username: ""})
  const [error, setError] = useState("");
  

  const Login = details => {
    console.log(details);

    if (details.username === adminUser.username && details.password === adminUser.password) {
      console.log("Logged In!");
      setUser({
        username: details.username
      }); 
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }
  const Logout = () => {
    setUser({ username: "", });

  }

  const [ toDoList, setToDoList ] = useState(data);
  const [count, setCount] = useState(data.length);

  const tasksDone = toDoList.filter(task => task.complete);
  const numberOfTasksDone = tasksDone.length;

  const priorityTasks = toDoList.filter(task => task.priority);
  const numberOfPriorities = priorityTasks.length;

  const normalTasks = toDoList.filter(task => !task.priority);

  const removeTask = (id) => {
    let AfterRemove = toDoList.filter(task => (task.id !== Number(id)))
    setToDoList(AfterRemove);
  }
  
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {

      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};     
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {

  }

  const addTask = (userInput ) => {
    console.log(userInput);
    let copy = [...toDoList];
    copy = [...copy, { id:  count + 1, task: userInput.task, priority: userInput.taskType === "Priority"? true : false, complete: false }];    
    setToDoList(copy);
    setCount(count + 1);
  }

  return (
    <div className="wholeBody">
      <div className="App">
        {(user.username !== "") ? (
          <div className="welcome">
            <h2>Welcome, <span>{user.username}</span></h2>
            
            <ToDoList toDoList={toDoList} removeTask={removeTask} handleToggle={handleToggle} handleFilter={handleFilter}/>
            <h3>Done: {numberOfTasksDone} Priorities: {numberOfPriorities}</h3>
            <ToDoForm addTask={addTask}/>
            <div className="centered">
              <button id="logout-button" onClick={Logout}>Logout</button>  
            </div>
          </div>

        ) : (
          <LoginForm Login={Login} error={error}/>
        )} 
      </div>
    </div>      
  );
}




export default App;
