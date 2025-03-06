import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  
  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag);
  };

  /**
   * @param {string} tag - Nombre del tag seleccionado
   * Nota: En la versión actual, solo se permite seleccionar un tag a la vez.
   *--------------------------------------------------------------------------
   * @description Esta función se encarga de seleccionar un tag y agregarlo al estado de la tarea.
   * Si el tag ya está seleccionado, se elimina de la lista de tags.
   * Si el tag no está seleccionado, se agrega a la lista de tags.
   *--------------------------------------------------------------------------
   * @returns {void} - No retorna ningún valor.
   * @example
   * selectTag('HTML');
   * selectTag('CSS');
   * ------------------------------------------------------------------------
   */
  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTgas = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTgas };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    //Prev permite que se guarde el estado anterior
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  //Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    console.log(taskData);
    e.preventDefault();
    setTasks(prev => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });   
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_button_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status_button"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit_button">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
