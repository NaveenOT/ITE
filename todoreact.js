import React, { useState } from 'react'
import './App.css'
function App() {
  const [task, setTask] = useState([])
  const [newtask, setNewtask] = useState("")
  const [taskcnt, setTaskcnt] = useState(0)
  const handletask = (e) =>{
       setNewtask(e.target.value)
  }
  const addtask = () =>{
  setTaskcnt(taskcnt + 1);
  setTask([...task, newtask])
  setNewtask("");
  }
  const removetask = (index) =>{
      const newarray = [...task];
      newarray.splice(index, 1);
      setTask(newarray);
      setTaskcnt(taskcnt - 1);
  }
  return(
    <div className="App">

    <h1>Task Planner</h1>
    <input type='text' onChange={handletask}></input>
    <button onClick={addtask}>Add Task</button>
    <h2>Task Cnt: {taskcnt}</h2>
    <br/>
    {task.map((tasks, index) =>{
      return(
        <div id="container">
        <h3 id="left">{tasks}</h3>
        <button id="right" onClick={() => removetask(index)}>X</button>
        </div>
      )
    })}
  </div>
  );
}

export default App;
