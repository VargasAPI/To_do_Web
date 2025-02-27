import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = ({ taskName, icon }) => {
  return (
    <section className="task_column">
      <h2 className="task_colum_heading">
        <img className="task_colum_icon" src={icon} alt=""/>{taskName}
      </h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
