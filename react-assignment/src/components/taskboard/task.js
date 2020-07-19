import React from "react";
import { FaPaperclip, FaBell, FaComment, FaCheck } from "react-icons/fa";

function TaskInfo(props) {
  return (
    <div className={"task " + props.task.priority}>
      <div className="task-title">
        <h3>{props.task.title}</h3>
      </div>
      {props.task.image && (
        <div className="task-image">
          <img
            src={"http://localhost:4000/file/" + props.task.image}
            alt="task image"
          />
        </div>
      )}
      <div className="task-info">
        <div className="task-date info-with-icon">
          <span className="icon-bell">
            <FaBell />
          </span>
          <span className="icon-check">
            <FaCheck />
          </span>
          <span>{props.task.notification}</span>
        </div>
        <div className="comments info-with-icon">
          <span>
            <FaComment />
          </span>
          <span>{props.task.comments}</span>
        </div>
        <div className="attachments info-with-icon">
          <span>
            <FaPaperclip />
          </span>
          <span>{props.task.attachments}</span>
        </div>
        <div className="users">
          {props.task.users.map((user) => (
            <div className="users-icon" key={user.userid}>
              <img
                src={"http://localhost:4000/file/" + user.usericon}
                alt="user"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskInfo;
