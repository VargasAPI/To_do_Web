import React, {useState, useEffect} from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

import todoIcon from "./assets/icons/Todo_2.png";
import checkIcon from "./assets/icons/check-mark.png";
import doingIcon from "./assets/icons/Doing.png";

const oldTasks = localStorage.getItem("tasks");
console
function App() {
const [tasks, setTasks] = useState(JSON.parse(oldTasks)) || [];
//Permitira guardar los datos en el local storage
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);  

const handleDelete = (taskIndex) => {
  const newTask = tasks.filter((task,index) => index !== taskIndex);
  setTasks(newTask);
}

console.log("tasks", tasks);
  return (
      <div className="app">
        <TaskForm setTasks={setTasks}/>
        <main className="app_main">
            <TaskColumn taskName='To do' icon={todoIcon} tasks={tasks} status={"todo"} handleDelete={handleDelete}/>
            <TaskColumn taskName='Doing' icon={checkIcon} tasks={tasks} status={"doing"} handleDelete={handleDelete}/>
            <TaskColumn taskName='Done' icon={doingIcon} tasks={tasks} status={"done"} handleDelete={handleDelete}/>
        </main>
      </div>
  );
}

export default App;
