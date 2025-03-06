import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = ({ taskName, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h2 className="task_colum_heading">
        <img className="task_colum_icon" src={icon} alt=""/>{taskName}
      </h2>

      {
        tasks.map((task,index) => task.status === status && 
        <TaskCard 
          key={index} 
          taskName={task.task} 
          tags={task.tags} 
          handleDelete={handleDelete}
          index={index}
          />
        )}
    </section>
  );
};

export default TaskColumn;
