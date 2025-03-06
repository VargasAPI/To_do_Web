import React from "react";

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/icons/delete.png";

const TaskCard = ({taskName, tags, handleDelete, index}) => {
  return (
    <article className="task_card">
      <p className="task_text">{taskName}</p>
      <div className="task_card_button_line">
        <div className="tas_card_tags">
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected />
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
