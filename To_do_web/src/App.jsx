import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

import todoIcon from "./assets/icons/Todo_2.png";
import checkIcon from "./assets/icons/check-mark.png";
import doingIcon from "./assets/icons/Doing.png";

function App() {

  return (
      <div className="app">
        <TaskForm />
        <main className="app_main">
            <TaskColumn taskName='To do' icon={todoIcon}/>
            <TaskColumn taskName='Doing' icon={checkIcon}/>
            <TaskColumn taskName='Done' icon={doingIcon}/>
        </main>
      </div>
  );
}

export default App;
