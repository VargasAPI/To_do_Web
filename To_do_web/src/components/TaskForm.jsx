import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          placeholder="Enter your task"
          className='task_input'
        />
        <div className="task_form_button_line">
          <div>
            <Tag tagName="HTML"/>
            <Tag tagName="CSS"/>
            <Tag tagName="JavaScript"/>
            <Tag tagName="React"/>
            
          </div>

          <div>
            <select className='task_status_button'>
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button
              type="submit"
              className="task_submit_button"
            >
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
